import { EditorFooter } from '@/components/EditorFooter'
import { EditorHeader } from '@/components/EditorHeader'


// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

export function LayoutCommon({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">{children}</main>
      </div>
    </>
  )
}


export function LayoutPlayground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col">
      <main className="flex-auto">{children}</main>
    </div>
  )
}
