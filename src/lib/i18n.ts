export type Language = 'en' | 'ja';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      instructor: 'Instructor',
      pricing: 'Pricing',
      caseStudies: 'Case Studies',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Your Gateway to the Japanese Blockchain Market',
      subtitle: 'Comprehensive support from social media management to community building for blockchain projects',
      ctaContact: 'Get Started',
      ctaPricing: 'View Pricing',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive support tailored for the Japanese market',
      sns: {
        title: 'Social Media Management',
        description: 'Professional Japanese social media management focused on X (Twitter) and the Japanese crypto community.',
        features: [
          'Japanese content creation',
          'Community engagement',
          'Latest updates and announcements',
          'Engagement optimization strategies',
        ],
      },
      events: {
        title: 'Workshops & Events',
        description: 'Planning and organizing workshops and meetups for the Japanese market to promote understanding and community building.',
        features: [
          'Monthly workshop hosting',
          'Online/offline flexibility',
          'Material creation support',
          'Participant follow-up',
        ],
      },
      localization: {
        title: 'Content Localization',
        description: 'Japanese translation of technical documents, whitepapers, and creating content tailored for the Japanese market.',
        features: [
          'Technical document translation',
          'Marketing material creation',
          'Blog article writing',
          'Video subtitle support',
        ],
      },
      community: {
        title: 'Community Management',
        description: 'Supporting the creation and management of Japanese communities on Discord, Telegram, and other platforms.',
        features: [
          'Community design',
          'Moderation services',
          'FAQ support',
          'Community event planning',
        ],
      },
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that fits your project scale and objectives',
      basic: {
        name: 'Basic Plan',
        description: 'Focused on social media management',
        features: [
          'Japanese X (Twitter) management',
          '5+ posts per week',
          'Community engagement',
          'Monthly reports',
          'Basic analytics & improvement suggestions',
        ],
      },
      standard: {
        name: 'Standard Plan',
        description: 'Social media + workshops',
        recommended: 'Recommended',
        features: [
          'All Basic plan features',
          'Monthly workshop hosting',
          'Workshop material creation',
          'Participant management & follow-up',
          'Discord/Telegram support',
          'Content translation (up to 5/month)',
        ],
      },
      premium: {
        name: 'Premium Plan',
        description: 'Full support package',
        price: 'Contact Us',
        features: [
          'All Standard plan features',
          'Bi-monthly workshops',
          'Unlimited content translation',
          'Marketing strategy planning',
          'Custom project planning',
        ],
      },
      cta: 'Get Started',
      note: '* All plans require a minimum 3-month contract. Contact us for details.',
      month: '/month',
    },
    instructor: {
      title: 'Meet Our Lead Instructor',
      subtitle: 'Expert guidance from a proven blockchain educator',
      name: 'Yuki Takahashi',
      role: 'Lead Blockchain Educator & Community Builder',
      bio: 'With over 1,500 YouTube subscribers and 50+ workshop sessions across Japan, Yuki brings extensive experience in blockchain education and community building to every project.',
      credentials: [
        '1,500+ YouTube subscribers',
        '50+ workshops conducted in Japan',
        'Blockchain project judge experience',
        'Solana ecosystem specialist',
        'Japanese crypto community leader',
      ],
      quote: 'Building bridges between global blockchain innovation and the Japanese market through education and community.',
    },
    caseStudies: {
      title: 'Projected Case Studies',
      subtitle: 'Expected outcomes based on our strategic approach to the Japanese market',
      defi: {
        project: 'DeFi Protocol (Projected)',
        category: 'DeFi',
        results: [
          'Target: 5,000+ Japanese Twitter followers in 3 months',
          'Expected: 50+ participants per monthly workshop',
          'Goal: 200%+ increase in TVL from Japanese users',
        ],
        testimonial: 'Based on our market analysis, we expect smooth entry into the Japanese market with strong community engagement through our educational approach.',
      },
      nft: {
        project: 'NFT Project (Projected)',
        category: 'NFT',
        results: [
          'Target: 3,000+ Discord Japanese channel members',
          'Expected: 40%+ increase in mints from Japan',
          'Goal: Enhanced brand awareness through community events',
        ],
        testimonial: 'Our strategy focuses on becoming a bridge to the Japanese NFT community, facilitating significant project growth through localized engagement.',
      },
      layer2: {
        project: 'Layer2 Solution (Projected)',
        category: 'Infrastructure',
        results: [
          'Target: Complete Japanese documentation',
          'Expected: Active Japanese developer community',
          'Goal: Strategic partnerships with Japanese enterprises',
        ],
        testimonial: 'Through clear Japanese explanations of technical content, we aim to deepen developer understanding and adoption in the Japanese market.',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about our services',
      items: [
        {
          question: 'What is the contract duration?',
          answer: 'The minimum contract period is 3 months. After that, renewal is possible on a monthly basis. We also offer discounts for long-term contracts, so please contact us for details.',
        },
        {
          question: 'What types of blockchain projects do you support?',
          answer: 'We support all types of blockchain-related projects including DeFi, NFT, Layer1/Layer2, GameFi, and DAOs. We can customize our approach based on project characteristics.',
        },
        {
          question: 'Can we use your services if we already have a Japanese community?',
          answer: 'Yes, we can support the activation and expansion of existing communities. We start with a current state analysis and propose optimal growth strategies.',
        },
        {
          question: 'Can we choose the workshop location and format?',
          answer: 'We flexibly accommodate online, offline, or hybrid formats according to your preferences. We have experience hosting in Tokyo, Osaka, Fukuoka, and other cities.',
        },
        {
          question: 'How are results measured and reported?',
          answer: 'We provide monthly KPI reports including specific metrics such as social media engagement rates, follower counts, workshop attendance, and community activity levels.',
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept cryptocurrency (USDT, USDC, ETH, etc.) or bank transfer (JPY). Invoice issuance is also available.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Feel free to reach out for a consultation',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company/Organization',
        projectName: 'Project Name',
        projectUrl: 'Project URL',
        plan: 'Preferred Plan',
        message: 'Message',
        required: '*',
        selectPlan: 'Please select',
        planOptions: {
          basic: 'Basic Plan ($1,000/month)',
          standard: 'Standard Plan ($2,000/month)',
          premium: 'Premium Plan ($3,500/month)',
          custom: 'Custom Plan',
        },
        messagePlaceholder: 'Please tell us about your project overview, goals in the Japanese market, and any specific requirements',
        submit: 'Send Message',
      },
      urgent: 'For urgent inquiries, please contact us directly',
    },
    footer: {
      description: 'Total support for blockchain projects entering the Japanese market',
      services: 'Services',
      links: 'Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  },
  ja: {
    nav: {
      services: 'サービス',
      instructor: '講師紹介',
      pricing: '料金プラン',
      caseStudies: '実績・事例',
      faq: 'FAQ',
      contact: 'お問い合わせ',
    },
    hero: {
      title: 'ブロックチェーンプロジェクトの\n日本市場進出をサポート',
      subtitle: 'SNS運用、勉強会開催、コミュニティ構築まで\n包括的なエージェントサービスを提供',
      ctaContact: 'お問い合わせはこちら',
      ctaPricing: '料金プランを見る',
    },
    services: {
      title: 'サービス内容',
      subtitle: '日本市場に特化した包括的なサポートを提供',
      sns: {
        title: 'SNS運用代行',
        description: 'X (Twitter)を中心とした日本語でのSNS運用を行います。日本のクリプトコミュニティに適したコンテンツ作成と発信を実施。',
        features: [
          '日本語でのツイート作成',
          'コミュニティとの交流',
          '最新情報の発信',
          'エンゲージメント向上施策',
        ],
      },
      events: {
        title: '勉強会・イベント運営',
        description: '日本市場向けの勉強会やミートアップを企画・運営。プロジェクトの理解促進とコミュニティ形成を支援します。',
        features: [
          '月次勉強会の開催',
          'オンライン/オフライン対応',
          '資料作成サポート',
          '参加者フォローアップ',
        ],
      },
      localization: {
        title: 'コンテンツローカライズ',
        description: '技術文書やホワイトペーパーの日本語翻訳、日本市場に合わせたコンテンツ制作を行います。',
        features: [
          '技術文書の翻訳',
          'マーケティング資料作成',
          'ブログ記事執筆',
          '動画字幕対応',
        ],
      },
      community: {
        title: 'コミュニティマネジメント',
        description: 'Discord、Telegram等での日本語コミュニティの構築と運営をサポートします。',
        features: [
          'コミュニティ設計',
          'モデレーション',
          'FAQ対応',
          'コミュニティイベント企画',
        ],
      },
    },
    pricing: {
      title: '料金プラン',
      subtitle: 'プロジェクトの規模と目的に合わせて選べる3つのプラン',
      basic: {
        name: 'ベーシックプラン',
        description: 'SNS運用に特化したプラン',
        features: [
          '日本語でのX(Twitter)運用',
          '週5回以上の投稿',
          'コミュニティとの交流',
          '月次レポート提出',
          '基本的な分析・改善提案',
        ],
      },
      standard: {
        name: 'スタンダードプラン',
        description: 'SNS運用+勉強会開催',
        recommended: 'おすすめ',
        features: [
          'ベーシックプランの全機能',
          '月1回の勉強会開催',
          '勉強会資料の作成',
          '参加者管理・フォローアップ',
          'Discord/Telegramサポート',
          'コンテンツ翻訳（月5本まで）',
        ],
      },
      premium: {
        name: 'プレミアムプラン',
        description: 'フルサポートプラン',
        price: '要相談',
        features: [
          'スタンダードプランの全機能',
          '月2回の勉強会開催',
          'コンテンツ翻訳（無制限）',
          'マーケティング戦略立案',
          'カスタム企画・提案',
        ],
      },
      cta: 'このプランで始める',
      note: '※ 全てのプランは3ヶ月契約から承ります。詳細はお問い合わせください。',
      month: '/月',
    },
    instructor: {
      title: '講師紹介',
      subtitle: '実績豊富なブロックチェーン教育者による専門指導',
      name: '高橋 ユウキ',
      role: 'リード ブロックチェーン教育者・コミュニティビルダー',
      bio: 'YouTube登録者数1,500人以上、日本全国で50回以上のワークショップを開催。ブロックチェーン教育とコミュニティ構築において豊富な経験を持ち、すべてのプロジェクトに専門知識をお届けします。',
      credentials: [
        'YouTube登録者数1,500人以上',
        '日本で50回以上のワークショップ開催',
        'ブロックチェーンプロジェクト審査員経験',
        'Solanaエコシステム専門家',
        '日本クリプトコミュニティリーダー',
      ],
      quote: '教育とコミュニティを通じて、グローバルなブロックチェーンイノベーションと日本市場の架け橋となることを使命としています。',
    },
    caseStudies: {
      title: '想定実績・事例',
      subtitle: '日本市場への戦略的アプローチに基づく期待される成果',
      defi: {
        project: 'DeFiプロトコル（想定ケース）',
        category: 'DeFi',
        results: [
          '目標: 3ヶ月で日本語Twitterフォロワー5,000人以上獲得',
          '予想: 月次勉強会に平均50名以上参加',
          '目標: 日本ユーザーからのTVL（Total Value Locked）200%以上増加',
        ],
        testimonial: '市場分析に基づき、教育的アプローチを通じた強力なコミュニティエンゲージメントにより、日本市場への円滑な参入を期待しています。',
      },
      nft: {
        project: 'NFTプロジェクト（想定ケース）',
        category: 'NFT',
        results: [
          '目標: Discord日本語チャンネル登録者3,000人以上',
          '予想: 日本からのミント率40%以上向上',
          '目標: コミュニティイベントによるブランド認知度向上',
        ],
        testimonial: '戦略は日本のNFTコミュニティとの架け橋となることに焦点を当て、ローカライズされたエンゲージメントを通じてプロジェクトの大幅な成長を促進することを目指しています。',
      },
      layer2: {
        project: 'Layer2ソリューション（想定ケース）',
        category: 'Infrastructure',
        results: [
          '目標: 技術文書の完全日本語化を実現',
          '予想: 活発な日本の開発者コミュニティ形成',
          '目標: 日本企業との戦略的パートナーシップ締結',
        ],
        testimonial: '技術的な内容を分かりやすく日本語で説明することで、日本市場での開発者の理解と採用の深化を目指します。',
      },
    },
    faq: {
      title: 'よくある質問',
      subtitle: 'サービスに関する疑問にお答えします',
      items: [
        {
          question: '契約期間はどのくらいですか？',
          answer: '最低契約期間は3ヶ月となっております。その後は月単位での更新が可能です。長期契約の場合は割引もございますので、詳細はお問い合わせください。',
        },
        {
          question: 'どのようなブロックチェーンプロジェクトに対応していますか？',
          answer: 'DeFi、NFT、Layer1/Layer2、GameFi、DAOなど、あらゆるブロックチェーン関連プロジェクトに対応可能です。プロジェクトの特性に合わせたカスタマイズも行います。',
        },
        {
          question: '既に日本にコミュニティがある場合でも利用できますか？',
          answer: 'はい、既存のコミュニティがある場合でも、その活性化や拡大のサポートが可能です。現状分析から始め、最適な成長戦略を提案させていただきます。',
        },
        {
          question: '勉強会の開催場所や形式は選べますか？',
          answer: 'オンライン、オフライン、ハイブリッドなど、ご希望に応じて柔軟に対応いたします。東京を中心に、大阪、福岡などでの開催実績もございます。',
        },
        {
          question: '成果はどのように測定・報告されますか？',
          answer: '月次でKPIレポートを提出いたします。SNSのエンゲージメント率、フォロワー数、勉強会参加者数、コミュニティの活性度など、具体的な数値でご報告します。',
        },
        {
          question: '支払い方法を教えてください',
          answer: '暗号資産（USDT、USDC、ETH等）または銀行振込（円建て）に対応しています。請求書発行も可能です。',
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'まずはお気軽にご相談ください',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        company: '会社名・組織名',
        projectName: 'プロジェクト名',
        projectUrl: 'プロジェクトURL',
        plan: 'ご希望のプラン',
        message: 'お問い合わせ内容',
        required: '*',
        selectPlan: '選択してください',
        planOptions: {
          basic: 'ベーシックプラン ($1,000/月)',
          standard: 'スタンダードプラン ($2,000/月)',
          premium: 'プレミアムプラン ($3,500/月)',
          custom: 'カスタムプラン',
        },
        messagePlaceholder: 'プロジェクトの概要、日本市場での目標、ご要望などをお聞かせください',
        submit: '送信する',
      },
      urgent: 'お急ぎの場合は、以下の連絡先までご連絡ください',
    },
    footer: {
      description: 'ブロックチェーンプロジェクトの日本市場進出をトータルサポート',
      services: 'サービス',
      links: 'リンク',
      contact: 'コンタクト',
      rights: 'All rights reserved.',
    },
  },
};