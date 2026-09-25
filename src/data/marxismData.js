/* 
  Marxist-Leninist Philosophy Knowledge Base & Interactive Datasets
  Source: Giáo trình Triết học Mác - Lênin (Trang 179 - 198)
*/

export const APP_DATA = {
  // C.Mác 1852 3 Historical Contributions
  macContributions: [
    {
      id: 1,
      title: "1. Tồn tại có tính lịch sử",
      content: "Sự tồn tại của các giai cấp chỉ gắn với những giai đoạn phát triển lịch sử nhất định của sản xuất.",
      detail: "Giai cấp không phải là hiện tượng vĩnh viễn. Nó chỉ xuất hiện khi sản xuất phát triển đến trình độ có của dư và chế độ tư hữu ra đời, và sẽ mất đi khi sản xuất đạt tới trình độ cộng sản chủ nghĩa."
    },
    {
      id: 2,
      title: "2. Tính tất yếu Chuyên chính vô sản",
      content: "Đấu tranh giai cấp tất yếu dẫn đến Chuyên chính vô sản.",
      detail: "Đấu tranh giai cấp giữa giai cấp vô sản và tư sản là cuộc đấu tranh giai cấp cuối cùng trong lịch sử, dẫn đến việc giai cấp vô sản giành chính quyền để cải tạo xã hội."
    },
    {
      id: 3,
      title: "3. Bước quá độ tới Xã hội không giai cấp",
      content: "Bản thân nền chuyên chính vô sản chỉ là bước quá độ tiến tới thủ tiêu mọi giai cấp và tiến tới xã hội không giai cấp.",
      detail: "Mục đích cuối cùng của chuyên chính vô sản không phải là duy trì quyền lực thống trị lâu dài, mà là giải phóng toàn bộ nhân loại và xóa bỏ mọi sự phân chia giai cấp."
    }
  ],

  // Lenin's 4 Basic Characteristics of Class
  leninCharacteristics: [
    {
      id: "dia-vi",
      title: "1. Địa vị Kinh tế - Xã hội",
      icon: "fas fa-users-cog",
      short: "Tập đoàn người có địa vị khác nhau trong một hệ thống sản xuất xã hội nhất định.",
      full: "Địa vị của mỗi giai cấp là do Phương thức sản xuất sinh ra và quy định. Ví dụ: Chủ nô & Nô lệ (Chiếm hữu nô lệ); Địa chủ & Nông dân (Phong kiến); Tư sản & Vô sản (Tư bản chủ nghĩa)."
    },
    {
      id: "tu-lieu-san-xuat",
      title: "2. Quan hệ với Tư liệu Sản xuất",
      icon: "fas fa-boxes",
      short: "Khác nhau về quan hệ đối với tư liệu sản xuất (thường được pháp luật quy định).",
      full: "Đây là QUAN HỆ CƠ BẢN VÀ QUYẾT ĐỊNH NHẤT. Giai cấp nào nắm tư liệu sản xuất sẽ trở thành giai cấp thống trị, bóc lột; giai cấp không có tư liệu sản xuất bắt buộc phải phụ thuộc và bị bóc lột."
    },
    {
      id: "to-chuc-quan-ly",
      title: "3. Vai trò trong Tổ chức Quản lý",
      icon: "fas fa-sitemap",
      short: "Khác nhau về vai trò trong tổ chức lao động xã hội và điều hành sản xuất.",
      full: "Giai cấp nắm tư liệu sản xuất sẽ giữ quyền tổ chức, điều hành, phân công lao động xã hội, chi phối các giai cấp khác trong quá trình sản xuất vật chất."
    },
    {
      id: "huong-thu-cai-xa-hoi",
      title: "4. Cách thức & Quy mô Phân phối",
      icon: "fas fa-chart-pie",
      short: "Khác nhau về cách thức và phần đại nhỏ hay nhiều của cải xã hội được hưởng.",
      full: "Do nắm giữ TLSX và quyền quản lý, giai cấp thống trị chiếm đoạt phần lớn của cải (thặng dư), còn giai cấp bị trị chỉ nhận được phần nhỏ tối thiểu để tái sản xuất sức lao động."
    }
  ],

  // Timeline of Class Origin
  originTimeline: [
    {
      stage: "Bước 1",
      title: "Xã hội Cộng sản Nguyên thủy",
      desc: "Lực lượng sản xuất chưa phát triển, năng suất lao động thấp. Công hữu về tư liệu sản xuất, mọi người cùng làm cùng hưởng. Chưa có tư hữu, chưa có giai cấp."
    },
    {
      stage: "Bước 2",
      title: "Công cụ kim loại & Năng suất tăng",
      desc: "Cuối thời kỳ nguyên thủy, công cụ sản xuất bằng kim loại xuất hiện. Năng suất lao động tăng cao, tạo ra 'của dư' thường xuyên trong xã hội."
    },
    {
      stage: "Bước 3",
      title: "Chế độ Tư hữu ra đời",
      desc: "Sự phân công lao động xã hội phát triển. Những người có chức quyền chiếm đoạt của dư và tư liệu sản xuất làm tài sản riêng -> Chế độ tư hữu hình thành."
    },
    {
      stage: "Bước 4",
      title: "Phân hóa & Giai cấp xuất hiện",
      desc: "Xã hội phân hóa thành người giàu - kẻ nghèo, tập đoàn bóc lột và tập đoàn bị bóc lột -> Giai cấp đầu tiên trong lịch sử ra đời (Chủ nô & Nô lệ)."
    }
  ],

  // 3 Forms of Proletarian Class Struggle
  proletarianStruggleForms: [
    {
      name: "Đấu tranh Kinh tế",
      badge: "Cơ sở ban đầu",
      desc: "Bảo vệ quyền lợi hàng ngày của công nhân: tăng lương, giảm giờ làm, cải thiện điều kiện lao động.",
      role: "Tập hợp lực lượng, nâng cao giác ngộ ban đầu nhưng CHỈ HẠN CHẾ sự bóc lột, chưa thể xóa bỏ được chế độ tư bản."
    },
    {
      name: "Đấu tranh Chính trị",
      badge: "Hình thức CAO NHẤT & Quyết định",
      desc: "Đánh đổ ách thống trị của giai cấp tư sản, đập tan nhà nước tư sản, giành lấy chính quyền về tay giai cấp vô sản.",
      role: "Là hình thức đấu tranh quyết định nhất, đòn bẩy vĩ đại nhất để giải phóng Lực lượng sản xuất."
    },
    {
      name: "Đấu tranh Tư tưởng",
      badge: "Vũ khí tinh thần",
      desc: "Đập tan hệ tư tưởng tư sản, giáo dục và trang bị Chủ nghĩa Mác - Lênin cho giai cấp công nhân và nhân dân lao động.",
      role: "Đảm bảo tính khoa học, cách mạng và giữ vững định hướng cho phong trào đấu tranh của giai cấp vô sản."
    }
  ],

  // Vietnam Specific Features
  vietnamFeatures: [
    {
      title: "Mục tiêu tổng quát",
      desc: "Xây dựng đất nước 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."
    },
    {
      title: "Hai Nhiệm vụ Chiến lược",
      desc: "Xây dựng thành công Chủ nghĩa xã hội đi đôi với Bảo vệ vững chắc Tổ quốc xã hội chủ nghĩa."
    },
    {
      title: "Nền tảng Xã hội",
      desc: "Khối liên minh Công nhân - Nông dân - Tri thức dưới sự lãnh đạo của Đảng Cộng sản Việt Nam."
    },
    {
      title: "Đấu tranh chống Thù địch",
      desc: "Đấu tranh làm thất bại âm mưu 'Diễn biến hòa bình', bảo vệ nền tảng tư tưởng của Đảng."
    }
  ],

  // Mindmap Nodes & Connections Data
  mindmapData: {
    nodes: [
      { id: "root", label: "GIAI CẤP & ĐẤU TRANH GIAI CẤP", category: "root", x: 450, y: 280 },
      
      // Branch 1: Giai cấp
      { id: "b1", label: "1. Giai cấp", category: "branch1", x: 220, y: 150 },
      { id: "b1_1", label: "Định nghĩa (Lênin)", category: "branch1", x: 100, y: 80 },
      { id: "b1_2", label: "4 Đặc trưng cơ bản", category: "branch1", x: 80, y: 180 },
      { id: "b1_3", label: "Nguồn gốc (Tư hữu & LLSX)", category: "branch1", x: 180, y: 250 },
      
      // Branch 2: Đấu tranh giai cấp
      { id: "b2", label: "2. Đấu tranh giai cấp", category: "branch2", x: 680, y: 150 },
      { id: "b2_1", label: "Tính tất yếu (Mẫu thuẫn lợi ích)", category: "branch2", x: 820, y: 80 },
      { id: "b2_2", label: "Thực chất & Động lực", category: "branch2", x: 840, y: 180 },
      { id: "b2_3", label: "Giải phóng LLSX", category: "branch2", x: 750, y: 250 },

      // Branch 3: ĐTGC của Giai cấp Vô sản
      { id: "b3", label: "3. ĐTGC của Giai cấp Vô sản", category: "branch3", x: 220, y: 420 },
      { id: "b3_1", label: "3 Hình thức (KT, CT, TT)", category: "branch3", x: 80, y: 380 },
      { id: "b3_2", label: "Thời kỳ Quá độ", category: "branch3", x: 100, y: 480 },
      { id: "b3_3", label: "Chuyên chính Vô sản", category: "branch3", x: 220, y: 530 },

      // Branch 4: Việt Nam hiện nay
      { id: "b4", label: "4. Đặc điểm ở Việt Nam", category: "branch4", x: 680, y: 420 },
      { id: "b4_1", label: "Dân giàu, nước mạnh...", category: "branch4", x: 820, y: 370 },
      { id: "b4_2", label: "2 Nhiệm vụ chiến lược", category: "branch4", x: 840, y: 470 },
      { id: "b4_3", label: "Liên minh Công-Nông-Trí", category: "branch4", x: 740, y: 530 }
    ],
    links: [
      { source: "root", target: "b1" },
      { source: "b1", target: "b1_1" },
      { source: "b1", target: "b1_2" },
      { source: "b1", target: "b1_3" },
      
      { source: "root", target: "b2" },
      { source: "b2", target: "b2_1" },
      { source: "b2", target: "b2_2" },
      { source: "b2", target: "b2_3" },

      { source: "root", target: "b3" },
      { source: "b3", target: "b3_1" },
      { source: "b3", target: "b3_2" },
      { source: "b3", target: "b3_3" },

      { source: "root", target: "b4" },
      { source: "b4", target: "b4_1" },
      { source: "b4", target: "b4_2" },
      { source: "b4", target: "b4_3" }
    ]
  },

  // Flashcards for Revision
  flashcards: [
    {
      id: 1,
      term: "Định nghĩa Giai cấp của Lênin",
      definition: "Những tập đoàn người to lớn khác nhau về địa vị trong hệ thống sản xuất xã hội, quan hệ sở hữu tư liệu sản xuất, vai trò tổ chức quản lý và quy mô hưởng thụ của cải."
    },
    {
      id: 2,
      term: "Quan hệ Kinh tế quyết định nhất?",
      definition: "Quan hệ SỞ HỮU đối với Tư liệu sản xuất. Giai cấp nào nắm tư liệu sản xuất sẽ trở thành giai cấp thống trị, bóc lột."
    },
    {
      id: 3,
      term: "Nguồn gốc trực tiếp của Giai cấp?",
      definition: "Sự xuất hiện của chế độ TƯ HỮU về tư liệu sản xuất (sau khi Lực lượng sản xuất phát triển tạo ra 'của dư')."
    },
    {
      id: 4,
      term: "Hình thức ĐTGC cao nhất của Giai cấp Vô sản?",
      definition: "ĐẤU TRANH CHÍNH TRỊ. Mục tiêu đánh đổ ách thống trị của tư sản, giành chính quyền về tay giai cấp công nhân."
    },
    {
      id: 5,
      term: "Bản chất cuộc Đấu tranh Giai cấp?",
      definition: "Là cuộc đấu tranh của quần chúng bị áp bức, bóc lột chống lại giai cấp áp bức, bóc lột nhằm lật đổ ách thống trị và giải phóng Lực lượng sản xuất."
    },
    {
      id: 6,
      term: "Mục tiêu ĐTGC ở Việt Nam hiện nay?",
      definition: "Thực hiện mục tiêu 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh', bảo vệ độc lập dân tộc và định hướng xã hội chủ nghĩa."
    }
  ],

  // Quiz Questions (10 items)
  quizQuestions: [
    {
      id: 1,
      question: "Theo C.Mác trong thư gửi G. Vâyđơmayơ (1852), sự tồn tại của các giai cấp chỉ gắn liền với điều kiện nào?",
      options: [
        "A. Mong muốn chủ quan của các nhà triết học",
        "B. Những giai đoạn phát triển lịch sử nhất định của sản xuất",
        "C. Sự xuất hiện của tôn giáo và nhà nước",
        "D. Sự gia tăng dân số quá nhanh"
      ],
      answer: 1,
      explanation: "Theo C.Mác (1852), sự tồn tại của các giai cấp chỉ gắn với những giai đoạn phát triển lịch sử nhất định của sản xuất."
    },
    {
      id: 2,
      question: "Trong 4 đặc trưng của giai cấp theo Lênin, yếu tố nào giữ vai trò QUYẾT ĐỊNH trực tiếp nhất?",
      options: [
        "A. Quan hệ đối với tư liệu sản xuất (Quan hệ sở hữu)",
        "B. Quy mô hưởng thụ của cải xã hội",
        "C. Trình độ học vấn của các thành viên",
        "D. Vị trí địa lý nơi tập đoàn người sinh sống"
      ],
      answer: 0,
      explanation: "Quan hệ sở hữu đối với tư liệu sản xuất là quan hệ cơ bản và chủ yếu nhất, quyết định quan hệ quản lý và phân phối."
    },
    {
      id: 3,
      question: "Nguyên nhân SÂU XA dẫn đến sự xuất hiện của giai cấp trong lịch sử là gì?",
      options: [
        "A. Chiến tranh giữa các bộ tộc",
        "B. Sự phát triển của Lực lượng sản xuất làm tăng năng suất lao động và xuất hiện của dư",
        "C. Sự xuất hiện của luật pháp",
        "D. Sự phân công lao động trong gia đình"
      ],
      answer: 1,
      explanation: "Sự phát triển của LLSX (công cụ kim loại) làm tăng năng suất lao động, tạo ra của dư là nguyên nhân sâu xa dẫn đến tư hữu và phân hóa giai cấp."
    },
    {
      id: 4,
      question: "Nguyên nhân TRỰC TIẾP dẫn đến sự ra đời của giai cấp là gì?",
      options: [
        "A. Chế độ tư hữu về tư liệu sản xuất",
        "B. Sự phân chia ranh giới địa lý",
        "C. Sự xuất hiện của tiền tệ",
        "D. Sự khác biệt về ngôn ngữ"
      ],
      answer: 0,
      explanation: "Chế độ tư hữu về tư liệu sản xuất là nguyên nhân trực tiếp làm xuất hiện sự phân hóa tập đoàn bóc lột và bị bóc lột."
    },
    {
      id: 5,
      question: "Câu nói nổi tiếng 'Lịch sử tất cả các xã hội cho đến ngày nay chỉ là lịch sử đấu tranh giai cấp' nằm trong tác phẩm nào?",
      options: [
        "A. Tư bản (C.Mác)",
        "B. Sáng kiến vĩ đại (V.I.Lênin)",
        "C. Tuyên ngôn của Đảng Cộng sản (C.Mác & Ph.Ăngghen, 1848)",
        "D. Chống Đuy-rinh (Ph.Ăngghen)"
      ],
      answer: 2,
      explanation: "Trích đoạn kinh điển này nằm trong tác phẩm 'Tuyên ngôn của Đảng Cộng sản' (1848) của C.Mác và Ph.Ăngghen."
    },
    {
      id: 6,
      question: "Hình thức đấu tranh nào của giai cấp vô sản được xem là CAO NHẤT và có tính quyết định thắng lợi?",
      options: [
        "A. Đấu tranh kinh tế",
        "B. Đấu tranh chính trị",
        "C. Đấu tranh tư tưởng",
        "D. Đấu tranh văn hóa"
      ],
      answer: 1,
      explanation: "Đấu tranh chính trị là hình thức đấu tranh cao nhất của giai cấp vô sản, có mục tiêu đánh đổ ách thống trị tư sản và giành chính quyền."
    },
    {
      id: 7,
      question: "Hình thức đấu tranh kinh tế của giai cấp công nhân có hạn chế lớn nhất là gì?",
      options: [
        "A. Không thể lôi kéo được nhiều công nhân tham gia",
        "B. Chỉ hạn chế sự bóc lột chứ không thể xóa bỏ được chế độ tư bản chủ nghĩa",
        "C. Làm cho chủ tư sản phá sản ngay lập tức",
        "D. Bị pháp luật cấm hoàn toàn"
      ],
      answer: 1,
      explanation: "Đấu tranh kinh tế giúp bảo vệ quyền lợi hàng ngày nhưng chỉ hạn chế sự bóc lột, không xóa bỏ được gốc rễ của chế độ tư bản."
    },
    {
      id: 8,
      question: "Trong thời kỳ quá độ từ TBCN lên CNXH, nhiệm vụ nào sau đây được xác định là cơ bản và lâu dài nhất?",
      options: [
        "A. Tăng cường trấn áp bằng lực lượng vũ trang",
        "B. Cải tạo xã hội cũ và xây dựng thành công xã hội mới (CNXH)",
        "C. Đóng cửa giao thương với quốc tế",
        "D. Xóa bỏ hoàn toàn ngành nông nghiệp"
      ],
      answer: 1,
      explanation: "Cải tạo xã hội cũ và xây dựng thành công xã hội mới là nhiệm vụ cơ bản, lâu dài và quyết định nhất trong thời kỳ quá độ."
    },
    {
      id: 9,
      question: "Ở Việt Nam hiện nay, nền tảng của chế độ xã hội mới là khối liên minh nào?",
      options: [
        "A. Liên minh giữa Tư sản và Công nhân",
        "B. Liên minh Công nhân - Nông dân - Tri thức dưới sự lãnh đạo của Đảng",
        "C. Liên minh giữa thương nhân và địa chủ",
        "D. Khối đoàn kết các doanh nghiệp tư nhân"
      ],
      answer: 1,
      explanation: "Khối liên minh Công nhân - Nông dân - Tri thức do Đảng Cộng sản Việt Nam lãnh đạo là nền tảng vững chắc của chế độ xã hội mới ở Việt Nam."
    },
    {
      id: 10,
      question: "Thực chất cuộc đấu tranh giai cấp ở Việt Nam hiện nay là gì?",
      options: [
        "A. Cuộc đấu tranh giữa các tôn giáo khác nhau",
        "B. Cuộc đấu tranh giữa các nhân tố thúc đẩy đất nước theo định hướng XHCN với các nhân tố cản trở",
        "C. Đấu tranh vũ trang giữa các vùng miền",
        "D. Xóa bỏ hoàn toàn thành phần kinh tế tư nhân"
      ],
      answer: 1,
      explanation: "Thực chất là cuộc đấu tranh giữa các nhân tố phát triển đất nước theo định hướng XHCN (dân giàu, nước mạnh, công bằng...) với các lực lượng cản trở, chống phá."
    }
  ]
};
