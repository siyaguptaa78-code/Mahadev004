import Link from "next/link";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Highest Score in T20: Records That Refuse to Fall | Mahadev Book",
  description: "The highest scores in T20 cricket — Gayle's 175*, Zimbabwe's 344, SRH's 287 and the records from the 2026 T20 World Cup. Individual and team records in one place.",
  alternates: { canonical: `${SITE_CONFIG.url}/highest-score-in-t20/` },
  openGraph: {
    title: "Highest Score in T20: Records That Refuse to Fall",
    description: "The highest scores in T20 cricket — Gayle's 175*, Zimbabwe's 344, SRH's 287 and the records from the 2026 T20 World Cup. Individual and team records in one place.",
    url: `${SITE_CONFIG.url}/highest-score-in-t20/`,
    type: "article",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Highest Score in T20: Records That Refuse to Fall",
    description: "The highest scores in T20 cricket — Gayle's 175*, Zimbabwe's 344, SRH's 287 and the records from the 2026 T20 World Cup. Individual and team records in one place.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the highest individual score in T20 cricket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The highest individual score in T20 cricket is Chris Gayle's unbeaten 175, scored for RCB against Pune Warriors in the 2013 IPL."
      }
    },
    {
      "@type": "Question",
      "name": "What is the highest score in T20 internationals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The highest individual score in T20Is is Aaron Finch's 172 for Australia against Zimbabwe in 2018. The highest team total is Zimbabwe's 344/4 against Gambia in 2024."
      }
    },
    {
      "@type": "Question",
      "name": "What is the highest team total in the IPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The highest team total in the IPL is Sunrisers Hyderabad's 287/3 against RCB in 2024."
      }
    },
    {
      "@type": "Question",
      "name": "What was the highest score in the 2026 T20 World Cup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India's 255/5 in the final against New Zealand is the highest team total in a T20 World Cup final. The highest individual score was Yuvraj Samra's 110 for Canada against New Zealand in the group stage."
      }
    },
    {
      "@type": "Question",
      "name": "Has anyone scored a T20 double century?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No one has scored a double century in a recognised T20 match, with Gayle's 175 the closest anyone has got."
      }
    }
  ]
};

export default function HighestScoreInT20Page() {
  return (
    <div className="min-h-screen bg-black py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Cricket
            </span>
            <span className="text-2xl">🏏</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Highest Score in T20: Records That Refuse to Fall
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>July 14, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <div className="text-zinc-600">By Mahadev Book Analyst</div>
          </div>
        </div>

        {/* Content body */}
        <article className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-350 prose-li:font-light prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4">
          {/* Jump To links */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 mb-8 text-sm">
            <span className="text-zinc-400 font-semibold mr-2">Jump to:</span>
            <span className="inline-flex flex-wrap gap-2 text-amber-500 font-medium">
              <a href="#individual-records" className="hover:underline">Individual Records</a>
              <span className="text-zinc-700">|</span>
              <a href="#team-records" className="hover:underline">Team Records</a>
              <span className="text-zinc-700">|</span>
              <a href="#ipl-records" className="hover:underline">IPL Records</a>
              <span className="text-zinc-700">|</span>
              <a href="#world-cup-records" className="hover:underline">World Cup Records</a>
              <span className="text-zinc-700">|</span>
              <a href="#faqs" className="hover:underline">FAQs</a>
            </span>
          </div>

          <p>
            T20 batting records have been reinvented thrice over — impact players, 250 as par, teenagers clearing fences with abandon — but the individual record in the format has stood for thirteen years. Chris Gayle's 175 has outlived everything. Here are the highest individual and team scores in T20s, and how close the modern game has come to equaling them.
          </p>

          <h2 id="individual-records" className="text-2xl font-serif font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-900">Highest Individual Scores in T20</h2>
          
          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-xl">
            <table className="min-w-full border-collapse text-left text-sm text-zinc-300">
              <thead>
                <tr className="bg-zinc-900/50 border-b border-zinc-800 text-zinc-400">
                  <th className="px-4 py-3 font-semibold">Score</th>
                  <th className="px-4 py-3 font-semibold">Player</th>
                  <th className="px-4 py-3 font-semibold">Match</th>
                  <th className="px-4 py-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                <tr className="hover:bg-zinc-950/40">
                  <td className="px-4 py-3 font-semibold text-white">175* (66 balls)</td>
                  <td className="px-4 py-3">Chris Gayle</td>
                  <td className="px-4 py-3">RCB vs Pune Warriors, IPL</td>
                  <td className="px-4 py-3">2013</td>
                </tr>
                <tr className="hover:bg-zinc-950/40">
                  <td className="px-4 py-3 font-semibold text-white">172 (76 balls)</td>
                  <td className="px-4 py-3">Aaron Finch</td>
                  <td className="px-4 py-3">Australia vs Zimbabwe, T20I</td>
                  <td className="px-4 py-3">2018</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Gayle's 175 — 17 sixes, from a man who was nearly left out of the XI that morning — is the highest individual score in any form of T20, with Aaron Finch's 172 the highest in the T20I format. Both records have seen a decade of "he could break it tonight" innings, but Gayle's in particular has proved incredibly difficult to get close to, the closest attempts usually dying agonizingly in the 140s — because no one else gets 66 balls to himself.
          </p>

          <h2 id="team-records" className="text-2xl font-serif font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-900">Highest Team Totals in T20</h2>

          <div className="overflow-x-auto my-6 border border-zinc-800 rounded-xl">
            <table className="min-w-full border-collapse text-left text-sm text-zinc-300">
              <thead>
                <tr className="bg-zinc-900/50 border-b border-zinc-800 text-zinc-400">
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Team</th>
                  <th className="px-4 py-3 font-semibold">Opponent</th>
                  <th className="px-4 py-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                <tr className="hover:bg-zinc-950/40">
                  <td className="px-4 py-3 font-semibold text-white">344/4</td>
                  <td className="px-4 py-3">Zimbabwe</td>
                  <td className="px-4 py-3">Gambia (T20I)</td>
                  <td className="px-4 py-3">2024</td>
                </tr>
                <tr className="hover:bg-zinc-950/40">
                  <td className="px-4 py-3 font-semibold text-white">314/3</td>
                  <td className="px-4 py-3">Nepal</td>
                  <td className="px-4 py-3">Mongolia (T20I)</td>
                  <td className="px-4 py-3">2023</td>
                </tr>
                <tr className="hover:bg-zinc-950/40">
                  <td className="px-4 py-3 font-semibold text-white">287/3</td>
                  <td className="px-4 py-3">Sunrisers Hyderabad</td>
                  <td className="px-4 py-3">RCB (IPL)</td>
                  <td className="px-4 py-3">2024</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Zimbabwe's 344/4 against Gambia is the highest team total in any T20 match — only the second time 300 has ever been crossed in a men's T20I, after Nepal's 314. However, the most remarkable total in a genuinely competitive match was Sunrisers Hyderabad's 287/3 in the 2024 IPL, the highest team score in the competition. It was one of two times that SRH broke the IPL team record in the 2024 season.
          </p>

          <h2 id="ipl-records" className="text-2xl font-serif font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-900">Highest Scores in the IPL</h2>
          <p>
            As mentioned, Gayle's 175* is the highest individual score in the IPL, with Brendon McCullum's 158 in the very first IPL match in 2008 the innings that announced the league to the world. The highest team total is SRH's 287/3 from 2024. For a season-by-season breakdown of the run charts, see our <Link href="/ipl-orange-cap-purple-cap-winners/" className="text-amber-500 hover:underline">Orange Cap winners list</Link> and <Link href="/most-runs-in-ipl/" className="text-amber-500 hover:underline">most runs in IPL</Link> pages.
          </p>

          <h2 id="world-cup-records" className="text-2xl font-serif font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-900">T20 World Cup Highs</h2>
          <p>
            The <Link href="/t20-world-cup-winners-list/" className="text-amber-500 hover:underline">2026 T20 World Cup</Link> saw two new additions to the list, with India's 255/5 in the final against New Zealand the highest team total in a T20 World Cup final, while Canada opener Yuvraj Samra made history as the youngest player to score a century in the tournament, his 110 coming against New Zealand in the group stage. However, the record individual score in a T20 World Cup remains Brendon McCullum's 123 against Bangladesh in 2012.
          </p>

          <h2 id="faqs" className="text-2xl font-serif font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-900">Highest T20 Score FAQs</h2>
          <div className="space-y-6 mt-6">
            <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-5">
              <strong className="text-white block mb-2 text-base">What is the highest individual score in T20 cricket?</strong>
              <p className="text-zinc-350 font-light text-sm leading-relaxed">The highest individual score in T20 cricket is Chris Gayle's unbeaten 175, scored for RCB against Pune Warriors in the 2013 IPL.</p>
            </div>
            <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-5">
              <strong className="text-white block mb-2 text-base">What is the highest score in T20 internationals?</strong>
              <p className="text-zinc-350 font-light text-sm leading-relaxed">The highest individual score in T20Is is Aaron Finch's 172 for Australia against Zimbabwe in 2018. The highest team total is Zimbabwe's 344/4 against Gambia in 2024.</p>
            </div>
            <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-5">
              <strong className="text-white block mb-2 text-base">What is the highest team total in the IPL?</strong>
              <p className="text-zinc-350 font-light text-sm leading-relaxed">The highest team total in the IPL is Sunrisers Hyderabad's 287/3 against RCB in 2024.</p>
            </div>
            <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-5">
              <strong className="text-white block mb-2 text-base">What was the highest score in the 2026 T20 World Cup?</strong>
              <p className="text-zinc-350 font-light text-sm leading-relaxed">India's 255/5 in the final against New Zealand is the highest team total in a T20 World Cup final. The highest individual score was Yuvraj Samra's 110 for Canada against New Zealand in the group stage.</p>
            </div>
            <div className="bg-zinc-950/30 border border-zinc-900/60 rounded-xl p-5">
              <strong className="text-white block mb-2 text-base">Has anyone scored a T20 double century?</strong>
              <p className="text-zinc-350 font-light text-sm leading-relaxed">No one has scored a double century in a recognised T20 match, with Gayle's 175 the closest anyone has got.</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-900 text-zinc-500 text-xs italic">
            Last updated: 14 July 2026. Records per ESPNcricinfo/ICC; updated when broken (don't hold your breath on the 175).
          </div>
        </article>

        {/* Bottom Call to action box */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/919412834207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
            >
              Get Your ID Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
