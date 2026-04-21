import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, ChevronDown, ChevronRight, Share2, Check, X } from 'lucide-react';

interface Props {
  onBack?: () => void;
  isAbnormal?: boolean;
}

const Accordion = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="dtr-accordion">
      <button 
        className="dtr-accordion__btn"
        onClick={() => setOpen(!open)}
      >
        <div className="dtr-accordion__title">{title}</div>
        {open ? <ChevronDown size={20} color="#000" /> : <ChevronRight size={20} color="#000" />}
      </button>
      {open && (
        <div className="dtr-accordion__content">
          {children}
        </div>
      )}
    </div>
  );
};

const DetailedTestResultScreen = ({ onBack, isAbnormal = true }: Props) => {
  return (
    <div className="dtr-screen">
      <div className="top-bar">
        <button className="back-btn-square" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="page-title" style={{ color: '#e53935' }}>Your Detailed Urine Test Result</div>
      </div>

      <div className="dtr-body">
        <div className="dtr-header-info">
          <div className="dtr-header-row">
            <span>Test ID: <span className="dtr-header-val">UA-2025-00341</span></span>
            <span>Date: <span className="dtr-header-val">05 Oct 2025</span></span>
          </div>
          <div className="dtr-header-row2">
            Patient ID: <span className="dtr-header-val dtr-header-val--red">PAT-012345</span>
          </div>
        </div>

        {/* Status Banner */}
        <div className={`dtr-status-banner ${isAbnormal ? 'dtr-status-banner--abnormal' : 'dtr-status-banner--normal'}`}>
          {isAbnormal ? (
            <XCircle size={64} className="dtr-status-icon dtr-status-icon--abnormal" strokeWidth={2.5} />
          ) : (
            <CheckCircle2 size={64} className="dtr-status-icon dtr-status-icon--normal" strokeWidth={2.5} />
          )}
          <div className="dtr-status-content">
            <div className="dtr-status-title">
              {isAbnormal ? 'Abnormal Urinalysis Result' : 'Status: Normal'}
            </div>
            <div className="dtr-status-desc">
              {isAbnormal ? 'Elevated pus cells and trace protein detected.' : 'All Parameters are within the normal rangeuj'}
            </div>
          </div>
        </div>

        <Accordion title="Physical Examination" defaultOpen={!isAbnormal}>
          <table className="dtr-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Result</th>
                <th>Range</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Color</td>
                <td>Yellow</td>
                <td>Pale Yellow</td>
                <td className="dtr-status-text dtr-status-text--normal">Normal</td>
              </tr>
              <tr>
                <td>Clarity</td>
                <td>Clear</td>
                <td>Clears</td>
                <td className="dtr-status-text dtr-status-text--normal">Normal</td>
              </tr>
            </tbody>
          </table>
        </Accordion>

        <Accordion title="Chemical Examination" defaultOpen={isAbnormal}>
          <table className="dtr-table dtr-table--small">
            <thead>
              <tr>
                <th>PARAMETER</th>
                <th>RESULT</th>
                <th>REFERENCE</th>
                <th>INTERPRETATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pH</td>
                <td>6.5</td>
                <td>4.5 - 8.0</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td className="dtr-text-red">Trace</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--abnormal">▲ Borderline</td>
              </tr>
              <tr>
                <td>Glucose</td>
                <td>Negative</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Ketones</td>
                <td>Negative</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Bilirubin</td>
                <td>Negative</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Urobilinogen</td>
                <td>Normal</td>
                <td>Normal</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Blood</td>
                <td>Negative</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Nitrite</td>
                <td>Negative</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Leukocyte<br/>Esterase</td>
                <td className="dtr-text-red">Trace</td>
                <td>Negative</td>
                <td className="dtr-status-text dtr-status-text--abnormal"><X size={12} strokeWidth={4} /> Abnormal</td>
              </tr>
            </tbody>
          </table>
        </Accordion>

        <Accordion title="Microscopic Examination" defaultOpen={isAbnormal}>
           <table className="dtr-table dtr-table--small">
            <thead>
              <tr>
                <th>PARAMETER</th>
                <th>RESULT</th>
                <th>REFERENCE</th>
                <th>INTERPRETATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RBC</td>
                <td>1-2 /hpf</td>
                <td>0-2 /hpf</td>
                <td className="dtr-status-text dtr-status-text--normal"><span className="dtr-icon-box"><Check size={12} strokeWidth={4} /></span> Normal</td>
              </tr>
              <tr>
                <td>Pus Cells</td>
                <td className="dtr-text-red">8-10 /hpf</td>
                <td>0-5 /hpf</td>
                <td className="dtr-status-text dtr-status-text--abnormal"><X size={12} strokeWidth={4} /> Abnormal</td>
              </tr>
             </tbody>
          </table>
        </Accordion>

        <div className="dtr-card">
          <h4 className="dtr-card-title">Interpretation Summary Card</h4>
          <p className="dtr-card-desc">
            [AI-Generated Health Insight]:<br />
            Your urinalysis shows normal kidney and bladder function, but the elevated pus cells and trace protein may indicate a possible urinary tract infection (UTI). We recommend consulting your doctor for a definitive diagnosis and treatment plan.
          </p>
        </div>

        {isAbnormal && (
          <div className="dtr-card">
            <h4 className="dtr-card-title">Doctor's Comment</h4>
            <p className="dtr-card-desc dtr-card-desc--bold">
              No comments from the doctor yet.
            </p>
          </div>
        )}
      </div>

      <div className="dtr-footer">
        <button className="dtr-btn fluid-btn--solid">
          <div className="dtr-btn-overlay">
            <Share2 size={24} />
            Share / Download Pdf
          </div>
        </button>
      </div>

    </div>
  );
};

export default DetailedTestResultScreen;
