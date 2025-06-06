

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// 翻訳データを定義
const translations = {
  pageTitle: {
    ja: "乳牛の分娩・難産兆候推定システム",
    en: "Dairy Cow Calving and Dystocia Prediction System",
  },
  pageSubtitle: {
    ja: "農業の過重労働問題を解決する画像処理技術とAIの活用",
    en: "Utilizing Image Processing Technology and AI to Solve Agricultural Overwork Issues",
  },
  background: {
    title: {
      ja: "研究背景・目的",
      en: "Research Background & Purpose",
    },
    content1: {
      ja: "分娩死亡事故による損失及び酪農の過重な労働負担問題と農業従事者不足は、日本の農業において深刻な課題となっています。分娩死亡事故による経済的損失は約100万円とされており、最も多い事故が難産です。適切な介助をおこなうために昼夜を問わない監視が必要ですが、これが酪農家の大きな負担となっています。",
      en: "Loss due to calving mortality accidents, excessive labor burden in dairy farming, and shortage of agricultural workers are serious issues in Japanese agriculture. The economic loss due to calving mortality accidents is estimated at about 1 million yen, with dystocia being the most common accident. Round-the-clock monitoring is necessary for appropriate assistance, which places a significant burden on dairy farmers.",
    },
    content2: {
      ja: "特に酪農は深刻化しており、令和4年時点で年間平均労働時間が2,183時間となっています。また、農業における経営離脱及び新規就農状況は深刻なものであり、新規就農者が不足していることから、毎年一定数の経営離脱が続いています。",
      en: "The situation in dairy farming is particularly serious, with an average annual working time of 2,183 hours as of 2022. Additionally, the situation regarding business withdrawal and new entrants in agriculture is severe, and due to the shortage of new farmers, a certain number of business withdrawals continue every year.",
    },
    content3: {
      ja: "本研究では、画像処理技術やAIを活用した効率的な分娩監視システムの開発により、24時間人手に頼らず分娩前の乳牛の見守りを可能にし、分娩時期を予測・特定して分娩事故の発生件数を低減させることを目的としています。",
      en: "This research aims to develop an efficient calving monitoring system using image processing technology and AI, enabling 24-hour monitoring of pre-calving dairy cows without relying on human labor, predicting and identifying calving timing, and reducing the number of calving accidents.",
    },
  },
  calvingData: {
    title: {
      ja: "分娩データと現状の課題",
      en: "Calving Data and Current Challenges",
    },
    content1: {
      ja: "現在の酪農現場では、分娩監視は主に人の目視に頼っており、介助のタイミングが早すぎたり遅すぎたりすることで事故が発生するケースが少なくありません。特に夜間の分娩では、適切なタイミングでの介助が難しく、難産による母牛や子牛の死亡リスクが高まります。",
      en: "In current dairy farming, calving monitoring relies mainly on human visual observation, and accidents often occur when assistance timing is too early or too late. Especially during nighttime calving, it is difficult to provide assistance at the appropriate timing, increasing the risk of death of the mother cow or calf due to dystocia.",
    },
    content2: {
      ja: "本研究では、牛舎に設置したカメラから得られる映像データを分析し、分娩前の特徴的な行動パターン（横臥・起立の繰り返し、尾の挙上、落ち着きのなさなど）を機械学習によって検出することで、分娩の兆候を早期に発見するシステムの開発を進めています。",
      en: "In this research, we are developing a system to detect early signs of calving by analyzing video data obtained from cameras installed in barns and detecting characteristic pre-calving behavioral patterns (repeated lying down and standing up, tail raising, restlessness, etc.) through machine learning.",
    },
  },
  systemFeatures: {
    title: {
      ja: "システムの特徴と効果",
      en: "System Features and Effects",
    },
    content1: {
      ja: "開発中のシステムでは、以下の特徴と効果が期待されています：",
      en: "The system under development is expected to have the following features and effects:",
    },
    features: {
      ja: [
        "24時間自動監視による酪農家の労働負担軽減",
        "AIによる分娩兆候の早期検出と通知機能",
        "分娩時の異常検知による適切なタイミングでの介助実現",
        "データの蓄積による予測精度の継続的な向上",
        "分娩事故の減少による経済的損失の低減",
        "子牛の生存率向上による生産性の向上",
      ],
      en: [
        "Reduction of dairy farmers' labor burden through 24-hour automatic monitoring",
        "Early detection of calving signs and notification function by AI",
        "Realization of assistance at appropriate timing through abnormality detection during calving",
        "Continuous improvement of prediction accuracy through data accumulation",
        "Reduction of economic losses by decreasing calving accidents",
        "Improvement of productivity by increasing calf survival rate",
      ],
    },
    content2: {
      ja: "システム適用後は、カメラとAIによる監視で分娩兆候を早期に検知し、適切なタイミングで酪農家に通知することで、効率的かつ効果的な介助が可能となります。これにより、分娩事故の発生率を大幅に低減させることが期待されています。",
      en: "After system implementation, early detection of calving signs through camera and AI monitoring and notification to dairy farmers at appropriate timing will enable efficient and effective assistance. This is expected to significantly reduce the incidence of calving accidents.",
    },
  },
  progress: {
    title: {
      ja: "研究の進捗と今後の展望",
      en: "Research Progress and Future Prospects",
    },
    content1: {
      ja: "現在、宮崎大学住吉フィールドの協力のもと、実際の牛舎環境でのデータ収集と分析を進めています。分娩前の行動パターンの特徴抽出と機械学習モデルの構築に成功し、初期段階での検証では高い精度で分娩兆候を検出できることが確認されています。",
      en: "Currently, with the cooperation of Miyazaki University's Sumiyoshi Field, we are collecting and analyzing data in actual barn environments. We have successfully extracted features of pre-calving behavioral patterns and constructed machine learning models, and verification at the initial stage has confirmed that calving signs can be detected with high accuracy.",
    },
    content2: {
      ja: "今後は、より多くのデータを収集してモデルの精度向上を図るとともに、実際の酪農現場での実証実験を行い、システムの実用性と効果を検証していく予定です。また、クラウドシステムとの連携により、スマートフォンやタブレットでの遠隔監視機能の実装も計画しています。",
      en: "In the future, we plan to collect more data to improve model accuracy, conduct demonstration experiments in actual dairy farming sites, and verify the practicality and effectiveness of the system. We also plan to implement remote monitoring functions on smartphones and tablets through collaboration with cloud systems.",
    },
    content3: {
      ja: "将来的には、このシステムを全国の酪農家に普及させることで、日本の酪農業の労働環境改善と生産性向上に貢献することを目指しています。",
      en: "In the long term, we aim to contribute to improving the working environment and productivity of Japan's dairy industry by spreading this system to dairy farmers nationwide.",
    },
  },
  backToProjects: {
    ja: "研究プロジェクト一覧に戻る",
    en: "Back to Research Projects",
  },
}

export default function CalvingPredictionPage() {
  // 言語コンテキストを使用
  const language = "ja"

  return (
    <div>
      {/* ヘッダーセクション */}
      <section 
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getImagePath('/images/normal_header.png')})`
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              {translations.pageTitle[language]}
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* プロジェクト概要 */}
            <div className="mb-16">
              <div
                className="relative aspect-auto mb-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "300px" }}
              >
                <Image
                  src={getImagePath("/images/research-murayama1.png")}
                  alt={translations.background.title[language]}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 研究背景・目的 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.background.title[language]}</h2>
              <p className="text-gray-700">{translations.background.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.background.content2[language]}</p>
              <p className="text-gray-700 mt-4">{translations.background.content3[language]}</p>
            </div>

            {/* 分娩データと現状の課題 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.calvingData.title[language]}</h2>
              <p className="text-gray-700">{translations.calvingData.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.calvingData.content2[language]}</p>
            </div>

            {/* システムの特徴と効果 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.systemFeatures.title[language]}</h2>
              <p className="text-gray-700">{translations.systemFeatures.content1[language]}</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
                {translations.systemFeatures.features[language].map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">{translations.systemFeatures.content2[language]}</p>
            </div>

            {/* 研究の進捗と今後の展望 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{translations.progress.title[language]}</h2>
              <p className="text-gray-700">{translations.progress.content1[language]}</p>
              <p className="text-gray-700 mt-4">{translations.progress.content2[language]}</p>
              <p className="text-gray-700 mt-4">{translations.progress.content3[language]}</p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/research/projects">
                <Button variant="outline">{translations.backToProjects[language]}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
