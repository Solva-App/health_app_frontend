import React, { useRef } from 'react';
import { ArrowLeft, Camera, FileUp, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface Props {
  onBack?: () => void;
  onNext?: () => void;
}

const UploadPrescriptionScreen = ({ onBack, onNext }: Props) => {
  const { showToast } = useApp();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    showToast('Uploading prescription...', 'info');
    setTimeout(() => {
      showToast('Prescription uploaded successfully!', 'success');
      onNext?.();
    }, 1500);
  };

  const handleCameraClick = () => handleUpload();
  const handleFileClick = () => { fileInputRef.current?.click(); };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) handleUpload();
  };

  return (
    <div className="upload-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title">Upload Prescription</div>
      </div>

      <div className="upload-body">
        <h2 className="upload-heading">
          How would you like to upload<br />your prescription?
        </h2>

        {/* Camera option */}
        <button className="upload-option-card" onClick={handleCameraClick}>
          <div className="upload-option-card__icon-wrap">
            <Camera size={30} color="#f44336" />
          </div>
          <div className="upload-option-card__text">
            <h3 className="upload-option-card__title">Camera</h3>
            <p className="upload-option-card__desc">Take a Clear photo of your prescription</p>
          </div>
          <span className="upload-option-card__chevron">{'>'}</span>
        </button>

        {/* File picker option */}
        <button className="upload-option-card" onClick={handleFileClick}>
          <div className="upload-option-card__icon-wrap upload-option-card__icon-wrap--solid">
            <FileUp size={24} color="#fff" />
          </div>
          <div className="upload-option-card__text">
            <h3 className="upload-option-card__title">File Picker</h3>
            <p className="upload-option-card__desc">Upload a Clear file from your device</p>
          </div>
          <span className="upload-option-card__chevron">{'>'}</span>
        </button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*,.pdf"
        />

        {/* Pharmacist CTA banner */}
        <div className="upload-pharma-banner" onClick={() => showToast('Connecting to Pharmacist...', 'info')}>
          <h2 className="upload-pharma-banner__title">Get Drug Prescription</h2>
          <p className="upload-pharma-banner__desc">
            Chat directly with our certified pharmacist for instant guidance and prescriptions
          </p>
          <div className="upload-pharma-banner__btn fluid-btn--solid">
            <MessageCircle size={22} fill="currentColor" strokeWidth={1} />
            <span>Message Pharmacist Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescriptionScreen;
