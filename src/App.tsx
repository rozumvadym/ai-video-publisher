import { ArrowDown, ArrowRight, AudioLines, CalendarDays, Captions, CirclePlay, Clapperboard, FileText, ListChecks, Send, Upload, Youtube, Instagram, Music2, Mail, ShieldCheck, Video } from 'lucide-react'
import { privacy, terms } from './policies'

export const email = 'rozumvadym1337@gmail.com'
const effective = 'November 12, 2026'
export const pages = {
  '': ['AI Video Publisher | Short-Form Video Workflows', 'Explore the planned workflow for creating, editing, organizing and publishing short-form videos.'],
  privacy: ['Privacy Policy | AI Video Publisher', 'How AI Video Publisher handles website visits, support inquiries and future connected account data.'],
  terms: ['Terms of Service | AI Video Publisher', 'Terms for using the AI Video Publisher website and conditions for future product features.'],
  contact: ['Contact | AI Video Publisher', 'Email AI Video Publisher for general inquiries, privacy questions and data deletion requests.'],
  'data-deletion': ['Data Deletion | AI Video Publisher', 'How to request deletion of information held by AI Video Publisher.'],
} as const
export type Route = keyof typeof pages

const features = [
  [FileText, 'AI-assisted script generation', 'Turn a video idea into a draft you can revise.'],
  [Clapperboard, 'Video generation and editing', 'Create assets and assemble clips for a vertical video.'],
  [AudioLines, 'AI voiceovers', 'Generate narration from your script.'],
  [Captions, 'Automatic subtitles', 'Generate and review captions before publishing.'],
  [CirclePlay, 'Video preview and management', 'Preview drafts and organize your video library.'],
  [CalendarDays, 'Content scheduling', 'Choose when approved videos should go live.'],
  [Send, 'Multi-platform publishing', 'Publish to connected accounts with your authorization.'],
  [ListChecks, 'Publishing status tracking', 'See which posts are scheduled, published or need attention.'],
] as const

const steps = [
  ['Start with an idea', 'Enter a video idea or upload existing content.'],
  ['Prepare the script', 'Generate or prepare a script for your short-form video.'],
  ['Create the assets', 'Prepare video assets, voiceovers and subtitles.'],
  ['Assemble and edit', 'Put the clips, narration and captions together.'],
  ['Preview the video', 'Review the finished video before sharing it.'],
  ['Confirm and publish', 'Connect a social media account and confirm before publishing.'],
]

function Brand({ base }: { base: string }) {
  return <a className="brand" href={base}><span className="brand-icon"><Video size={19} aria-hidden="true" /></span>AI Video Publisher</a>
}

function Home({ base }: { base: string }) {
  return <>
    <section className="hero wrap">
      <div>
        <p className="eyebrow">Short-form video workflows</p>
        <h1>Create, Manage, and Publish Short-Form Videos</h1>
        <p className="lede">AI Video Publisher helps content creators streamline video production, organize their content, and manage publishing workflows across multiple social platforms.</p>
        <div className="actions"><a className="button" href="#how-it-works">Explore the workflow <ArrowDown size={17} aria-hidden="true" /></a><a className="text-link" href={base + 'contact/'}>Contact us <ArrowRight size={16} aria-hidden="true" /></a></div>
      </div>
      <figure className="workflow-preview">
        <figcaption><span><Clapperboard size={20} aria-hidden="true" /> Video production</span><small>Illustrative workflow</small></figcaption>
        <ol>{([[Upload, 'Idea or upload', 'Start with your own material'], [FileText, 'Script and assets', 'Prepare visuals, audio and captions'], [CirclePlay, 'Edit and preview', 'Review the finished video'], [Send, 'Confirm and publish', 'Authorize publishing to a connected account']] as const).map(([Icon, title, description]) => <li key={title}><span className="tile"><Icon size={21} aria-hidden="true" /></span><div><strong>{title}</strong><small>{description}</small></div></li>)}</ol>
      </figure>
    </section>
    <section className="band"><div className="wrap platform-row"><div><h2>Planned platform support</h2><p>Independent product. No affiliation or endorsement.</p></div><div className="platforms"><span><Youtube className="youtube" aria-hidden="true" /> YouTube Shorts</span><span><Music2 aria-hidden="true" /> TikTok</span><span><Instagram className="instagram" aria-hidden="true" /> Instagram Reels</span></div></div></section>
    <section id="how-it-works" className="wrap section"><p className="eyebrow">Planned workflow</p><h2>How it works</h2><ol className="steps">{steps.map(([title, description], i) => <li key={title}><span className="step-number" aria-hidden="true">{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></section>
    <section id="features" className="band"><div className="wrap section"><p className="eyebrow">Product roadmap</p><h2>Planned features</h2><p className="section-intro">This public site provides product information and support links. The video tools and integrations below are in development planning.</p><div className="features">{features.map(([Icon, title, description]) => <article key={title}><span className="tile"><Icon size={21} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="wrap section about"><div><p className="eyebrow">About the product</p><h2>Built around the creator’s workflow</h2></div><p>AI Video Publisher is designed to simplify short-form video production and publishing. It brings scripting, asset creation, editing, preview and publishing into one planned workflow, with creators in control of what goes live.</p></section>
  </>
}

function Email({ subject }: { subject?: string }) {
  return <a className="text-link" href={'mailto:' + email + (subject ? '?subject=' + encodeURIComponent(subject) : '')}>{email}</a>
}

function Information({ route, base }: { route: Exclude<Route, ''>; base: string }) {
  if (route === 'contact') return <article className="wrap section info"><p className="eyebrow">AI Video Publisher</p><h1>Contact</h1><p className="lede">Get in touch about the website or planned product.</p><div className="contact-grid"><section><span className="tile"><Mail aria-hidden="true" /></span><h2>General inquiries</h2><p>Send product questions, feedback or website issues to support.</p><Email subject="AI Video Publisher inquiry" /></section><section><span className="tile"><ShieldCheck aria-hidden="true" /></span><h2>Privacy and data deletion</h2><p>Use the same address for privacy questions and requests to delete your information.</p><Email subject="Privacy or data deletion inquiry" /><p><a href={base + 'data-deletion/'}>Data deletion instructions</a></p></section></div><p className="legal-links"><a href={base + 'privacy/'}>Privacy Policy</a><a href={base + 'terms/'}>Terms of Service</a></p></article>
  if (route === 'data-deletion') return <article className="wrap section info"><p className="eyebrow">Privacy and support</p><h1>Data Deletion</h1><p className="lede">Request deletion of information held by AI Video Publisher by emailing support.</p><section><h2>Submit a request</h2><p>Email <Email subject="Data deletion request" />. Use the email address you previously contacted us from if possible, and describe the records you want deleted. Keep passwords and access tokens out of your message.</p></section><section><h2>What may be deleted</h2><p>For the current website, requests can cover support messages and information you shared by email. If account features launch, requests may also cover profile details, stored connection data, uploaded videos, generated assets and related metadata held by the application.</p></section><section><h2>How account disconnection will work</h2><p>Once account connections are available, disconnecting an account is intended to stop new access and scheduled publishing through that connection and remove the stored authorization. Users will also be able to revoke access through their social platform settings where supported. Manage previously published posts directly on the social platform.</p></section><section><h2>How requests are processed</h2><p>Support reviews requests manually, may ask for information needed to verify your identity or locate the records, and replies with the outcome. Some information may need to be retained to meet legal obligations or resolve a dispute.</p><p>See the <a href={base + 'privacy/'}>Privacy Policy</a> for more about information handling.</p></section></article>

  const isPrivacy = route === 'privacy'
  const sections = isPrivacy ? privacy : terms
  return <article className="wrap section info"><p className="eyebrow">AI Video Publisher</p><h1>{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h1><p className="effective">Effective {effective}</p><nav className="toc" aria-label="On this page"><h2>On this page</h2><ol>{sections.map(([title], i) => <li key={title}><a href={'#section-' + (i + 1)}>{title}</a></li>)}</ol></nav>{sections.map(([title, content], i) => <section key={title} id={'section-' + (i + 1)}><h2>{i + 1}. {title}</h2><p>{content}</p>{title === 'Contact Information' && <Email subject={isPrivacy ? 'Privacy inquiry' : 'Terms inquiry'} />}{title === 'Data Deletion Requests' && <p><a href={base + 'data-deletion/'}>See the data deletion instructions</a>.</p>}</section>)}</article>
}

export function App({ route, base }: { route: Route; base: string }) {
  return <><a className="skip" href="#main">Skip to content</a><header className="header"><div className="wrap header-inner"><Brand base={base} /><nav aria-label="Main navigation"><a href={base} aria-current={route === '' ? 'page' : undefined}>Home</a><a href={base + '#features'}>Features</a><a href={base + '#how-it-works'}>How It Works</a><a href={base + 'contact/'} aria-current={route === 'contact' ? 'page' : undefined}>Contact</a></nav></div></header><main id="main" tabIndex={-1}>{route ? <Information route={route} base={base} /> : <Home base={base} />}</main><footer className="footer"><div className="wrap"><div className="footer-top"><Brand base={base} /><nav aria-label="Footer navigation">{([['', 'Home'], ['privacy', 'Privacy Policy'], ['terms', 'Terms of Service'], ['data-deletion', 'Data Deletion'], ['contact', 'Contact']] as const).map(([path, label]) => <a key={path} href={base + (path ? path + '/' : '')} aria-current={route === path ? 'page' : undefined}>{label}</a>)}</nav></div><p>© 2026 AI Video Publisher</p></div></footer></>
}
