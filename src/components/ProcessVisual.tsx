import { Check, FileText, FolderOpen, PenTool, SwatchBook } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProcessVisualProps = {
  step: number
}

export function ProcessVisual({ step }: ProcessVisualProps) {
  return (
    <div className="process-visual-card">
      {step === 0 ? (
        <div className="process-brief">
          <FileText className="size-5 text-[var(--naz-blue)]" />
          <div>
            <span>Brief</span>
            <strong>هدف المشروع</strong>
          </div>
          <div className="mini-line w-4/5" />
          <div className="mini-line w-3/5" />
          <div className="audience-map">
            <span>الجمهور</span>
            <span>المشكلة</span>
            <span>القيمة</span>
          </div>
          <div className="folder-row">
            <span>Problem statement</span>
            <small>Clear</small>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="process-moodboard">
          <SwatchBook className="size-5 text-[var(--naz-blue)]" />
          <div className="swatches">
            {['#080C10', '#0062FF', '#00F5FF', '#F0F4F8'].map((color) => (
              <span key={color} style={{ background: color }} />
            ))}
          </div>
          <div className="mood-grid">
            <span />
            <span />
            <span />
          </div>
          <div className="audience-map">
            <span>هادئ</span>
            <span>واضح</span>
            <span>موثوق</span>
          </div>
          <p>اتجاه بصري واضح</p>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="process-design">
          <PenTool className="size-5 text-[var(--naz-blue)]" />
          <div className="logo-box" dir="ltr">NAZ</div>
          <div className="ui-blocks">
            <span />
            <span />
            <span />
          </div>
          <div className="audience-map">
            <span>Logo</span>
            <span>UI Blocks</span>
            <span>Templates</span>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="process-review">
          <div className="compare">
            <span>قبل</span>
            <span>بعد</span>
          </div>
          <div className="folder-row">
            <span>Refinement comments</span>
            <small>12</small>
          </div>
          {[0, 1, 2].map((item) => (
            <div key={item} className={cn('review-row', item === 1 && 'is-done')}>
              <Check className="size-4" />
              <span />
            </div>
          ))}
        </div>
      ) : null}

      {step === 4 ? (
        <div className="process-delivery">
          <FolderOpen className="size-6 text-[var(--naz-blue)]" />
          {['Logo Files', 'Brand Guide', 'Social Kit'].map((item) => (
            <div key={item} className="folder-row">
              <span>{item}</span>
              <small>Ready</small>
            </div>
          ))}
          <div className="folder-row">
            <span>Usage Guidelines</span>
            <small>PDF</small>
          </div>
        </div>
      ) : null}
    </div>
  )
}
