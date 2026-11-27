(function () {
  "use strict";

  /* EMBEDDED_QUESTIONS_START */
  const EMBEDDED_QUESTIONS = [
    {
      "id": 1,
      "direction": "vi-zh",
      "hanzi": "水",
      "pinyin": "shuǐ",
      "meaning_vi": "nước",
      "example_zh": "我喝水。",
      "example_vi": "Tôi uống nước.",
      "hint": {
        "type": "danh từ",
        "letters": 1,
        "firstLetter": "s"
      }
    },
    {
      "id": 2,
      "direction": "zh-vi",
      "hanzi": "猫",
      "pinyin": "māo",
      "meaning_vi": "mèo",
      "example_zh": "我有一只猫。",
      "example_vi": "Tôi có một con mèo.",
      "hint": {
        "type": "danh từ",
        "letters": 3,
        "firstLetter": "m"
      }
    },
    {
      "id": 3,
      "direction": "vi-zh",
      "hanzi": "你好",
      "pinyin": "nǐ hǎo",
      "meaning_vi": "xin chào",
      "example_zh": "你好，很高兴认识你！",
      "example_vi": "Xin chào, rất vui được quen bạn!",
      "hint": {
        "type": "cụm từ",
        "letters": 2,
        "firstLetter": "n"
      }
    },
    {
      "id": 4,
      "direction": "zh-vi",
      "hanzi": "车",
      "pinyin": "chē",
      "meaning_vi": "xe, ô tô",
      "example_zh": "这辆车很漂亮。",
      "example_vi": "Chiếc xe này rất đẹp.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "x"
      }
    },
    {
      "id": 5,
      "direction": "vi-zh",
      "hanzi": "茶",
      "pinyin": "chá",
      "meaning_vi": "trà",
      "example_zh": "我喜欢喝茶。",
      "example_vi": "Tôi thích uống trà.",
      "hint": {
        "type": "danh từ",
        "letters": 1,
        "firstLetter": "c"
      }
    },
    {
      "id": 6,
      "direction": "zh-vi",
      "hanzi": "爸爸",
      "pinyin": "bà ba",
      "meaning_vi": "bố, ba",
      "example_zh": "我爸爸是老师。",
      "example_vi": "Bố tôi là giáo viên.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "b"
      }
    },
    {
      "id": 7,
      "direction": "vi-zh",
      "hanzi": "妈妈",
      "pinyin": "mā ma",
      "meaning_vi": "mẹ",
      "example_zh": "妈妈做的菜很好吃。",
      "example_vi": "Món mẹ nấu rất ngon.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "m"
      }
    },
    {
      "id": 8,
      "direction": "zh-vi",
      "hanzi": "吃",
      "pinyin": "chī",
      "meaning_vi": "ăn",
      "example_zh": "你吃早饭了吗？",
      "example_vi": "Bạn ăn sáng chưa?",
      "hint": {
        "type": "động từ",
        "letters": 2,
        "firstLetter": "ă"
      }
    },
    {
      "id": 9,
      "direction": "vi-zh",
      "hanzi": "喝",
      "pinyin": "hē",
      "meaning_vi": "uống",
      "example_zh": "你想喝什么？",
      "example_vi": "Bạn muốn uống gì?",
      "hint": {
        "type": "động từ",
        "letters": 1,
        "firstLetter": "h"
      }
    },
    {
      "id": 10,
      "direction": "zh-vi",
      "hanzi": "狗",
      "pinyin": "gǒu",
      "meaning_vi": "chó",
      "example_zh": "那只小狗很可爱。",
      "example_vi": "Con chó nhỏ đó rất đáng yêu.",
      "hint": {
        "type": "danh từ",
        "letters": 3,
        "firstLetter": "c"
      }
    },
    {
      "id": 11,
      "direction": "vi-zh",
      "hanzi": "一",
      "pinyin": "yī",
      "meaning_vi": "số một",
      "example_zh": "我有一个苹果。",
      "example_vi": "Tôi có một quả táo.",
      "hint": {
        "type": "số từ",
        "letters": 1,
        "firstLetter": "y"
      }
    },
    {
      "id": 12,
      "direction": "zh-vi",
      "hanzi": "三",
      "pinyin": "sān",
      "meaning_vi": "ba, số ba",
      "example_zh": "我买三本书。",
      "example_vi": "Tôi mua ba quyển sách.",
      "hint": {
        "type": "số từ",
        "letters": 2,
        "firstLetter": "b"
      }
    },
    {
      "id": 13,
      "direction": "vi-zh",
      "hanzi": "五",
      "pinyin": "wǔ",
      "meaning_vi": "số năm",
      "example_zh": "现在五点了。",
      "example_vi": "Bây giờ là năm giờ rồi.",
      "hint": {
        "type": "số từ",
        "letters": 1,
        "firstLetter": "w"
      }
    },
    {
      "id": 14,
      "direction": "zh-vi",
      "hanzi": "十",
      "pinyin": "shí",
      "meaning_vi": "mười, số mười",
      "example_zh": "桌上有十个杯子。",
      "example_vi": "Trên bàn có mười cái cốc.",
      "hint": {
        "type": "số từ",
        "letters": 4,
        "firstLetter": "m"
      }
    },
    {
      "id": 15,
      "direction": "vi-zh",
      "hanzi": "百",
      "pinyin": "bǎi",
      "meaning_vi": "một trăm",
      "example_zh": "这件衣服一百块。",
      "example_vi": "Cái áo này một trăm tệ.",
      "hint": {
        "type": "số từ",
        "letters": 1,
        "firstLetter": "b"
      }
    },
    {
      "id": 16,
      "direction": "zh-vi",
      "hanzi": "今天",
      "pinyin": "jīn tiān",
      "meaning_vi": "hôm nay",
      "example_zh": "今天天气很好。",
      "example_vi": "Thời tiết hôm nay rất đẹp.",
      "hint": {
        "type": "danh từ",
        "letters": 6,
        "firstLetter": "h"
      }
    },
    {
      "id": 17,
      "direction": "vi-zh",
      "hanzi": "明天",
      "pinyin": "míng tiān",
      "meaning_vi": "ngày mai",
      "example_zh": "我明天去学校。",
      "example_vi": "Ngày mai tôi đi học.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "m"
      }
    },
    {
      "id": 18,
      "direction": "zh-vi",
      "hanzi": "昨天",
      "pinyin": "zuó tiān",
      "meaning_vi": "hôm qua",
      "example_zh": "昨天我看了电影。",
      "example_vi": "Hôm qua tôi đã xem phim.",
      "hint": {
        "type": "danh từ",
        "letters": 6,
        "firstLetter": "h"
      }
    },
    {
      "id": 19,
      "direction": "vi-zh",
      "hanzi": "现在",
      "pinyin": "xiàn zài",
      "meaning_vi": "bây giờ",
      "example_zh": "现在几点了？",
      "example_vi": "Bây giờ là mấy giờ rồi?",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "x"
      }
    },
    {
      "id": 20,
      "direction": "zh-vi",
      "hanzi": "谢谢",
      "pinyin": "xiè xie",
      "meaning_vi": "cảm ơn",
      "example_zh": "谢谢你的帮助！",
      "example_vi": "Cảm ơn sự giúp đỡ của bạn!",
      "hint": {
        "type": "cụm từ",
        "letters": 5,
        "firstLetter": "c"
      }
    },
    {
      "id": 21,
      "direction": "vi-zh",
      "hanzi": "苹果",
      "pinyin": "píng guǒ",
      "meaning_vi": "quả táo",
      "example_zh": "我每天吃一个苹果。",
      "example_vi": "Mỗi ngày tôi ăn một quả táo.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "p"
      }
    },
    {
      "id": 22,
      "direction": "zh-vi",
      "hanzi": "米饭",
      "pinyin": "mǐ fàn",
      "meaning_vi": "cơm",
      "example_zh": "我想吃一碗米饭。",
      "example_vi": "Tôi muốn ăn một bát cơm.",
      "hint": {
        "type": "danh từ",
        "letters": 3,
        "firstLetter": "c"
      }
    },
    {
      "id": 23,
      "direction": "vi-zh",
      "hanzi": "牛奶",
      "pinyin": "niú nǎi",
      "meaning_vi": "sữa",
      "example_zh": "弟弟早上喝牛奶。",
      "example_vi": "Em trai uống sữa vào buổi sáng.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "n"
      }
    },
    {
      "id": 24,
      "direction": "zh-vi",
      "hanzi": "面条",
      "pinyin": "miàn tiáo",
      "meaning_vi": "mì, sợi mì",
      "example_zh": "这碗面条很香。",
      "example_vi": "Bát mì này rất thơm.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "m"
      }
    },
    {
      "id": 25,
      "direction": "vi-zh",
      "hanzi": "旅游",
      "pinyin": "lǚ yóu",
      "meaning_vi": "du lịch",
      "example_zh": "我喜欢去中国旅游。",
      "example_vi": "Tôi thích đi du lịch Trung Quốc.",
      "hint": {
        "type": "động từ",
        "letters": 2,
        "firstLetter": "l"
      }
    },
    {
      "id": 26,
      "direction": "zh-vi",
      "hanzi": "书",
      "pinyin": "shū",
      "meaning_vi": "sách",
      "example_zh": "我在看一本中文书。",
      "example_vi": "Tôi đang đọc một quyển sách tiếng Trung.",
      "hint": {
        "type": "danh từ",
        "letters": 4,
        "firstLetter": "s"
      }
    },
    {
      "id": 27,
      "direction": "vi-zh",
      "hanzi": "哥哥",
      "pinyin": "gē ge",
      "meaning_vi": "anh trai",
      "example_zh": "我哥哥在北京工作。",
      "example_vi": "Anh trai tôi làm việc ở Bắc Kinh.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "g"
      }
    },
    {
      "id": 28,
      "direction": "zh-vi",
      "hanzi": "姐姐",
      "pinyin": "jiě jie",
      "meaning_vi": "chị gái",
      "example_zh": "姐姐送我一本书。",
      "example_vi": "Chị gái tặng tôi một quyển sách.",
      "hint": {
        "type": "danh từ",
        "letters": 6,
        "firstLetter": "c"
      }
    },
    {
      "id": 29,
      "direction": "vi-zh",
      "hanzi": "弟弟",
      "pinyin": "dì di",
      "meaning_vi": "em trai",
      "example_zh": "我弟弟今年八岁。",
      "example_vi": "Em trai tôi năm nay tám tuổi.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "d"
      }
    },
    {
      "id": 30,
      "direction": "zh-vi",
      "hanzi": "妹妹",
      "pinyin": "mèi mei",
      "meaning_vi": "em gái",
      "example_zh": "我妹妹很喜欢画画。",
      "example_vi": "Em gái tôi rất thích vẽ tranh.",
      "hint": {
        "type": "danh từ",
        "letters": 5,
        "firstLetter": "e"
      }
    },
    {
      "id": 31,
      "direction": "vi-zh",
      "hanzi": "绿",
      "pinyin": "lǜ",
      "meaning_vi": "xanh lá",
      "example_zh": "春天树叶变绿了。",
      "example_vi": "Mùa xuân lá cây chuyển xanh rồi.",
      "hint": {
        "type": "tính từ",
        "letters": 1,
        "firstLetter": "l"
      }
    },
    {
      "id": 32,
      "direction": "zh-vi",
      "hanzi": "家",
      "pinyin": "jiā",
      "meaning_vi": "nhà, gia đình",
      "example_zh": "我爱我的家。",
      "example_vi": "Tôi yêu gia đình của tôi.",
      "hint": {
        "type": "danh từ",
        "letters": 3,
        "firstLetter": "n"
      }
    },
    {
      "id": 33,
      "direction": "vi-zh",
      "hanzi": "朋友",
      "pinyin": "péng you",
      "meaning_vi": "bạn bè",
      "example_zh": "他是我的好朋友。",
      "example_vi": "Anh ấy là bạn thân của tôi.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "p"
      }
    },
    {
      "id": 34,
      "direction": "zh-vi",
      "hanzi": "老师",
      "pinyin": "lǎo shī",
      "meaning_vi": "giáo viên, thầy cô",
      "example_zh": "王老师教我们汉语。",
      "example_vi": "Thầy Vương dạy chúng tôi tiếng Hán.",
      "hint": {
        "type": "danh từ",
        "letters": 8,
        "firstLetter": "g"
      }
    },
    {
      "id": 35,
      "direction": "vi-zh",
      "hanzi": "学生",
      "pinyin": "xué shēng",
      "meaning_vi": "học sinh",
      "example_zh": "我是一名大学生。",
      "example_vi": "Tôi là một sinh viên đại học.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "x"
      }
    },
    {
      "id": 36,
      "direction": "zh-vi",
      "hanzi": "医生",
      "pinyin": "yī shēng",
      "meaning_vi": "bác sĩ",
      "example_zh": "医生让我多休息。",
      "example_vi": "Bác sĩ bảo tôi nghỉ ngơi nhiều hơn.",
      "hint": {
        "type": "danh từ",
        "letters": 5,
        "firstLetter": "b"
      }
    },
    {
      "id": 37,
      "direction": "vi-zh",
      "hanzi": "看",
      "pinyin": "kàn",
      "meaning_vi": "xem",
      "example_zh": "我晚上喜欢看书。",
      "example_vi": "Buổi tối tôi thích đọc sách.",
      "hint": {
        "type": "động từ",
        "letters": 1,
        "firstLetter": "k"
      }
    },
    {
      "id": 38,
      "direction": "zh-vi",
      "hanzi": "听",
      "pinyin": "tīng",
      "meaning_vi": "nghe",
      "example_zh": "我经常听中文歌。",
      "example_vi": "Tôi thường nghe nhạc tiếng Trung.",
      "hint": {
        "type": "động từ",
        "letters": 4,
        "firstLetter": "n"
      }
    },
    {
      "id": 39,
      "direction": "vi-zh",
      "hanzi": "说",
      "pinyin": "shuō",
      "meaning_vi": "nói",
      "example_zh": "她会说一点儿汉语。",
      "example_vi": "Cô ấy biết nói một chút tiếng Trung.",
      "hint": {
        "type": "động từ",
        "letters": 1,
        "firstLetter": "s"
      }
    },
    {
      "id": 40,
      "direction": "zh-vi",
      "hanzi": "写",
      "pinyin": "xiě",
      "meaning_vi": "viết",
      "example_zh": "请写下你的名字。",
      "example_vi": "Hãy viết tên của bạn xuống.",
      "hint": {
        "type": "động từ",
        "letters": 4,
        "firstLetter": "v"
      }
    },
    {
      "id": 41,
      "direction": "vi-zh",
      "hanzi": "买",
      "pinyin": "mǎi",
      "meaning_vi": "mua",
      "example_zh": "我想去超市买水果。",
      "example_vi": "Tôi muốn đi siêu thị mua trái cây.",
      "hint": {
        "type": "động từ",
        "letters": 1,
        "firstLetter": "m"
      }
    },
    {
      "id": 42,
      "direction": "zh-vi",
      "hanzi": "去",
      "pinyin": "qù",
      "meaning_vi": "đi",
      "example_zh": "周末你去哪儿？",
      "example_vi": "Cuối tuần bạn đi đâu?",
      "hint": {
        "type": "động từ",
        "letters": 2,
        "firstLetter": "đ"
      }
    },
    {
      "id": 43,
      "direction": "vi-zh",
      "hanzi": "来",
      "pinyin": "lái",
      "meaning_vi": "đến",
      "example_zh": "欢迎你来我家玩。",
      "example_vi": "Chào mừng bạn đến nhà tôi chơi.",
      "hint": {
        "type": "động từ",
        "letters": 1,
        "firstLetter": "l"
      }
    },
    {
      "id": 44,
      "direction": "zh-vi",
      "hanzi": "爱",
      "pinyin": "ài",
      "meaning_vi": "yêu",
      "example_zh": "我很爱我的家人。",
      "example_vi": "Tôi rất yêu gia đình mình.",
      "hint": {
        "type": "động từ",
        "letters": 3,
        "firstLetter": "y"
      }
    },
    {
      "id": 45,
      "direction": "vi-zh",
      "hanzi": "学习",
      "pinyin": "xué xí",
      "meaning_vi": "học tập",
      "example_zh": "我每天学习汉语。",
      "example_vi": "Mỗi ngày tôi đều học tiếng Trung.",
      "hint": {
        "type": "động từ",
        "letters": 2,
        "firstLetter": "x"
      }
    },
    {
      "id": 46,
      "direction": "zh-vi",
      "hanzi": "工作",
      "pinyin": "gōng zuò",
      "meaning_vi": "làm việc, công việc",
      "example_zh": "你在哪里工作？",
      "example_vi": "Bạn làm việc ở đâu?",
      "hint": {
        "type": "động từ",
        "letters": 7,
        "firstLetter": "l"
      }
    },
    {
      "id": 47,
      "direction": "vi-zh",
      "hanzi": "睡觉",
      "pinyin": "shuì jiào",
      "meaning_vi": "đi ngủ",
      "example_zh": "我晚上十点睡觉。",
      "example_vi": "Tôi đi ngủ lúc 10 giờ tối.",
      "hint": {
        "type": "động từ",
        "letters": 2,
        "firstLetter": "s"
      }
    },
    {
      "id": 48,
      "direction": "zh-vi",
      "hanzi": "星期",
      "pinyin": "xīng qī",
      "meaning_vi": "tuần, thứ",
      "example_zh": "一个星期有七天。",
      "example_vi": "Một tuần có bảy ngày.",
      "hint": {
        "type": "danh từ",
        "letters": 4,
        "firstLetter": "t"
      }
    },
    {
      "id": 49,
      "direction": "vi-zh",
      "hanzi": "上午",
      "pinyin": "shàng wǔ",
      "meaning_vi": "buổi sáng",
      "example_zh": "我上午有汉语课。",
      "example_vi": "Buổi sáng tôi có tiết tiếng Trung.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "s"
      }
    },
    {
      "id": 50,
      "direction": "zh-vi",
      "hanzi": "晚上",
      "pinyin": "wǎn shang",
      "meaning_vi": "buổi tối",
      "example_zh": "晚上我们一起吃饭吧。",
      "example_vi": "Buổi tối chúng ta cùng ăn cơm nhé.",
      "hint": {
        "type": "danh từ",
        "letters": 7,
        "firstLetter": "b"
      }
    },
    {
      "id": 51,
      "direction": "vi-zh",
      "hanzi": "年",
      "pinyin": "nián",
      "meaning_vi": "năm",
      "example_zh": "祝你新年快乐！",
      "example_vi": "Chúc bạn năm mới vui vẻ!",
      "hint": {
        "type": "danh từ",
        "letters": 1,
        "firstLetter": "n"
      }
    },
    {
      "id": 52,
      "direction": "zh-vi",
      "hanzi": "月",
      "pinyin": "yuè",
      "meaning_vi": "tháng",
      "example_zh": "一年有十二个月。",
      "example_vi": "Một năm có mười hai tháng.",
      "hint": {
        "type": "danh từ",
        "letters": 5,
        "firstLetter": "t"
      }
    },
    {
      "id": 53,
      "direction": "vi-zh",
      "hanzi": "水果",
      "pinyin": "shuǐ guǒ",
      "meaning_vi": "trái cây",
      "example_zh": "妈妈买了很多水果。",
      "example_vi": "Mẹ mua rất nhiều trái cây.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "s"
      }
    },
    {
      "id": 54,
      "direction": "zh-vi",
      "hanzi": "鸡蛋",
      "pinyin": "jī dàn",
      "meaning_vi": "trứng, trứng gà",
      "example_zh": "早上我吃一个鸡蛋。",
      "example_vi": "Buổi sáng tôi ăn một quả trứng gà.",
      "hint": {
        "type": "danh từ",
        "letters": 5,
        "firstLetter": "t"
      }
    },
    {
      "id": 55,
      "direction": "vi-zh",
      "hanzi": "咖啡",
      "pinyin": "kā fēi",
      "meaning_vi": "cà phê",
      "example_zh": "爸爸每天喝一杯咖啡。",
      "example_vi": "Bố mỗi ngày uống một ly cà phê.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "k"
      }
    },
    {
      "id": 56,
      "direction": "zh-vi",
      "hanzi": "电话",
      "pinyin": "diàn huà",
      "meaning_vi": "điện thoại",
      "example_zh": "我给你打电话。",
      "example_vi": "Tôi gọi điện thoại cho bạn.",
      "hint": {
        "type": "danh từ",
        "letters": 9,
        "firstLetter": "đ"
      }
    },
    {
      "id": 57,
      "direction": "vi-zh",
      "hanzi": "学校",
      "pinyin": "xué xiào",
      "meaning_vi": "trường học",
      "example_zh": "我们学校很大。",
      "example_vi": "Trường học của chúng tôi rất lớn.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "x"
      }
    },
    {
      "id": 58,
      "direction": "zh-vi",
      "hanzi": "医院",
      "pinyin": "yī yuàn",
      "meaning_vi": "bệnh viện",
      "example_zh": "医院离我家很近。",
      "example_vi": "Bệnh viện rất gần nhà tôi.",
      "hint": {
        "type": "danh từ",
        "letters": 8,
        "firstLetter": "b"
      }
    },
    {
      "id": 59,
      "direction": "vi-zh",
      "hanzi": "天气",
      "pinyin": "tiān qì",
      "meaning_vi": "thời tiết",
      "example_zh": "今天的天气很凉快。",
      "example_vi": "Thời tiết hôm nay rất mát mẻ.",
      "hint": {
        "type": "danh từ",
        "letters": 2,
        "firstLetter": "t"
      }
    },
    {
      "id": 60,
      "direction": "zh-vi",
      "hanzi": "钱",
      "pinyin": "qián",
      "meaning_vi": "tiền",
      "example_zh": "这本书多少钱？",
      "example_vi": "Quyển sách này bao nhiêu tiền?",
      "hint": {
        "type": "danh từ",
        "letters": 4,
        "firstLetter": "t"
      }
    }
  ];
  /* EMBEDDED_QUESTIONS_END */

  const MAX_COMMENTS = 12;
  const DEFAULT_SECONDS = 45;
  const MIN_SECONDS = 5;
  const MAX_SECONDS = 120;
  const DEFAULT_REVEAL_MS = 4500;

  const DEMO_BOT_NAMES = [
    "linh_nhi99",
    "minh_khoi",
    "thao_vy_hsk",
    "quoc_bao",
    "ha_my_2k",
    "tuan_anh",
    "ngoc_han",
    "duc_huy",
    "phuong_thao",
    "khanh_linh",
    "gia_bao",
    "yen_nhi"
  ];

  const WRONG_ZH_GUESSES = [
    "火",
    "山",
    "人",
    "大",
    "小",
    "天",
    "木",
    "口",
    "huo",
    "shan",
    "ren",
    "da jia",
    "xiao",
    "tian qi",
    "hao chi",
    "bu zhi dao"
  ];

  const WRONG_VI_GUESSES = [
    "bầu trời",
    "ngôi sao",
    "con cá",
    "quyển vở",
    "cái bàn",
    "mùa hè",
    "đi chơi",
    "không biết",
    "buổi trưa",
    "bông hoa"
  ];

  const state = {
    questions: [],
    currentIndex: 0,
    phase: "idle", // idle | playing | paused | reveal | ended
    pausedFromPhase: null,
    secondsPerQuestion: DEFAULT_SECONDS,
    timeLeft: DEFAULT_SECONDS,
    revealDurationMs: DEFAULT_REVEAL_MS,
    revealRemainingMs: DEFAULT_REVEAL_MS,
    revealStartedAt: 0,
    mode: "demo", // demo | live
    ttsEnabled: true,
    cleanMode: false,
    scores: Object.create(null),
    comments: [],
    currentWinner: null,
    confettiCount: 0,
    botCommentsOnQuestion: 0,
    ws: null,
    wsConnected: false,
    tiktokUsername: "",
    // Ably (bản Pages, THÊM 26/11 — theo mẫu game Đoán Từ): trang tĩnh nhận
    // bình luận/quà qua Ably, không còn WebSocket nội bộ.
    ably: null,
    ablyConnected: false,
    ablyChannel: null,
    ablyAttachedOnce: false,
    seenMsgIds: new Set(),
    pageLoadTs: Date.now(),
    timers: {
      countdown: null,
      reveal: null,
      demoBot: null,
      toast: null,
      confettiRaf: null
    }
  };

  let dom = {};

  /* ==========================
     Matching & Normalization
     ========================== */

  function normalizePinyin(input) {
    if (typeof input !== "string") return "";
    return input
      .toLowerCase()
      .replace(/[ǖǘǚǜü]/g, "v")
      .replace(/[āáǎà]/g, "a")
      .replace(/[ēéěè]/g, "e")
      .replace(/[īíǐì]/g, "i")
      .replace(/[ōóǒò]/g, "o")
      .replace(/[ūúǔù]/g, "u")
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeVietnamese(input) {
    if (typeof input !== "string") return "";
    return input
      .toLowerCase()
      .replace(/[đ]/g, "d")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getFirstMeaning(meaningVi) {
    if (typeof meaningVi !== "string") return "";
    return meaningVi.split(",")[0].trim();
  }

  function getMeaningAlternatives(meaningVi) {
    if (typeof meaningVi !== "string") return [];
    return meaningVi
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function isAnswerCorrect(question, rawInput) {
    if (!question || typeof rawInput !== "string") return false;
    const trimmed = rawInput.trim();
    if (!trimmed) return false;

    if (question.direction === "vi-zh") {
      if (trimmed === question.hanzi) {
        return true;
      }
      const normInput = normalizePinyin(trimmed);
      const normExpected = normalizePinyin(question.pinyin);
      if (!normInput || !normExpected) return false;
      if (normInput === normExpected) return true;
      if (normInput.replace(/\s+/g, "") === normExpected.replace(/\s+/g, "")) {
        return true;
      }
      return false;
    }

    if (question.direction === "zh-vi") {
      const normInput = normalizeVietnamese(trimmed);
      if (!normInput) return false;
      const alternatives = getMeaningAlternatives(question.meaning_vi);
      return alternatives.some((alt) => normalizeVietnamese(alt) === normInput);
    }

    return false;
  }

  /* ==========================
     Text-to-Speech (Web Speech API)
     ========================== */

  function getSpeechSynthesisSafe() {
    try {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        return window.speechSynthesis;
      }
    } catch (_) {
      return null;
    }
    return null;
  }

  function stopSpeech() {
    const synth = getSpeechSynthesisSafe();
    if (!synth || typeof synth.cancel !== "function") return;
    try {
      synth.cancel();
    } catch (_) {
      // Ignore speech synthesis errors in restricted environments
    }
  }

  function pickVoice(synth, lang) {
    if (!synth || typeof synth.getVoices !== "function") return null;
    try {
      const voices = synth.getVoices() || [];
      if (!voices.length) return null;
      const exact = voices.find(
        (v) => v.lang && v.lang.toLowerCase() === lang.toLowerCase()
      );
      if (exact) return exact;
      const prefix = lang.split("-")[0].toLowerCase();
      return (
        voices.find(
          (v) => v.lang && v.lang.toLowerCase().startsWith(prefix)
        ) || null
      );
    } catch (_) {
      return null;
    }
  }

  function speakSegments(segments) {
    if (!state.ttsEnabled || !Array.isArray(segments) || !segments.length) {
      return false;
    }
    const synth = getSpeechSynthesisSafe();
    const UtteranceCtor =
      typeof window !== "undefined" ? window.SpeechSynthesisUtterance : null;
    if (!synth || typeof synth.speak !== "function" || typeof UtteranceCtor !== "function") {
      return false;
    }

    stopSpeech();

    try {
      for (const seg of segments) {
        if (!seg || !seg.text) continue;
        const utter = new UtteranceCtor(seg.text);
        utter.lang = seg.lang;
        utter.rate = seg.lang && seg.lang.startsWith("zh") ? 0.92 : 1.0;
        const voice = pickVoice(synth, seg.lang);
        if (voice) {
          utter.voice = voice;
        }
        synth.speak(utter);
      }
      return true;
    } catch (_) {
      return false;
    }
  }

  function buildQuestionSpeech(question) {
    if (!question) return [];
    if (question.direction === "vi-zh") {
      return [
        {
          text: `${question.meaning_vi} trong tiếng Trung là gì?`,
          lang: "vi-VN"
        }
      ];
    }
    return [
      { text: question.hanzi, lang: "zh-CN" },
      { text: "trong tiếng Việt nghĩa là gì?", lang: "vi-VN" }
    ];
  }

  function buildRevealSpeech(question) {
    if (!question) return [];
    return [
      { text: question.hanzi, lang: "zh-CN" },
      { text: question.meaning_vi, lang: "vi-VN" },
      { text: question.example_zh, lang: "zh-CN" },
      { text: question.example_vi, lang: "vi-VN" }
    ];
  }

  function speakQuestion(question) {
    return speakSegments(buildQuestionSpeech(question));
  }

  function speakReveal(question) {
    return speakSegments(buildRevealSpeech(question));
  }

  function reread() {
    const q = getCurrentQuestion();
    if (!q) return false;
    if (state.phase === "reveal") {
      return speakReveal(q);
    }
    if (state.phase === "playing" || state.phase === "paused") {
      return speakQuestion(q);
    }
    return false;
  }

  /* ==========================
     Confetti Celebration
     ========================== */

  function launchConfetti() {
    state.confettiCount += 1;
    const canvas = dom.confettiCanvas;
    if (!canvas) return;
    canvas.dataset.confettiCount = String(state.confettiCount);

    let ctx = null;
    try {
      if (typeof canvas.getContext === "function") {
        ctx = canvas.getContext("2d");
      }
    } catch (_) {
      ctx = null;
    }
    if (!ctx) return;

    const width = window.innerWidth || 1080;
    const height = window.innerHeight || 1920;
    canvas.width = width;
    canvas.height = height;

    const colors = ["#c8102e", "#128a49", "#22c55e", "#f97316", "#0ea5e9", "#ef4444"];
    const particles = Array.from({ length: 72 }, () => ({
      x: width * (0.15 + Math.random() * 0.7),
      y: height * (0.18 + Math.random() * 0.12),
      vx: (Math.random() - 0.5) * 14,
      vy: -6 - Math.random() * 12,
      size: 8 + Math.random() * 10,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    }));

    if (state.timers.confettiRaf && typeof cancelAnimationFrame === "function") {
      cancelAnimationFrame(state.timers.confettiRaf);
      state.timers.confettiRaf = null;
    }

    const startTime = Date.now();
    function step() {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.42;
        p.rotation += p.vRot;
        p.life = Math.max(0, 1 - elapsed / 2400);
        if (p.life > 0 && p.y < height + 40) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.life;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.65);
          ctx.restore();
        }
      }

      if (alive && elapsed < 2500 && typeof requestAnimationFrame === "function") {
        state.timers.confettiRaf = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, width, height);
        state.timers.confettiRaf = null;
      }
    }

    if (typeof requestAnimationFrame === "function") {
      state.timers.confettiRaf = requestAnimationFrame(step);
    }
  }

  /* ==========================
     DOM Rendering
     ========================== */

  function getCurrentQuestion() {
    if (!state.questions.length) return null;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) {
      return null;
    }
    return state.questions[state.currentIndex];
  }

  function renderLetterBoxes(question, revealed) {
    if (!dom.letterBoxes || !question) return;
    dom.letterBoxes.innerHTML = "";

    if (question.direction === "vi-zh") {
      const chars = Array.from(question.hanzi);
      const wordEl = document.createElement("div");
      wordEl.className = "letter-word";
      for (const ch of chars) {
        const box = document.createElement("span");
        box.className = "letter-box is-hanzi-box" + (revealed ? " revealed" : "");
        box.textContent = revealed ? ch : "";
        wordEl.appendChild(box);
      }
      dom.letterBoxes.appendChild(wordEl);
      return;
    }

    const firstMeaning = getFirstMeaning(question.meaning_vi);
    const words = firstMeaning.split(/\s+/).filter(Boolean);
    for (const word of words) {
      const wordEl = document.createElement("div");
      wordEl.className = "letter-word";
      for (const ch of Array.from(word)) {
        const box = document.createElement("span");
        box.className = "letter-box" + (revealed ? " revealed" : "");
        box.textContent = revealed ? ch.toUpperCase() : "";
        wordEl.appendChild(box);
      }
      dom.letterBoxes.appendChild(wordEl);
    }
  }

  function renderHint(question) {
    if (!dom.hintContent || !question) return;
    const typeText = question.hint && question.hint.type ? ` (${question.hint.type})` : "";
    if (question.direction === "vi-zh") {
      dom.hintContent.textContent = `Pinyin: ${question.pinyin}${typeText} • ${question.hint.letters} chữ Hán`;
    } else {
      const firstChar = (question.hint && question.hint.firstLetter ? question.hint.firstLetter : "").toUpperCase();
      dom.hintContent.textContent = `Chữ cái đầu: "${firstChar}"${typeText} • ${question.hint.letters} chữ cái`;
    }
  }

  function renderQuestion(question) {
    if (!question) return;

    if (dom.questionProgress) {
      dom.questionProgress.textContent = `Câu ${state.currentIndex + 1} / ${state.questions.length}`;
    }

    if (dom.directionPill) {
      dom.directionPill.textContent =
        question.direction === "vi-zh" ? "Việt → Trung" : "Trung → Việt";
    }

    if (dom.promptMain && dom.promptPinyin && dom.promptSub) {
      if (question.direction === "vi-zh") {
        dom.promptMain.textContent = question.meaning_vi;
        dom.promptMain.classList.remove("is-hanzi");
        dom.promptPinyin.hidden = true;
        dom.promptPinyin.textContent = "";
        dom.promptSub.textContent = "trong tiếng Trung là gì?";
      } else {
        dom.promptMain.textContent = question.hanzi;
        dom.promptMain.classList.add("is-hanzi");
        dom.promptPinyin.hidden = false;
        dom.promptPinyin.textContent = `(${question.pinyin})`;
        dom.promptSub.textContent = "trong tiếng Việt nghĩa là gì?";
      }
    }

    renderLetterBoxes(question, false);
    renderHint(question);

    if (dom.revealPanel) {
      dom.revealPanel.hidden = true;
    }
  }

  function renderTimer() {
    if (dom.timerValue) {
      dom.timerValue.textContent = `${Math.max(0, state.timeLeft)}s`;
    }
    if (dom.timerBarFill) {
      const pct =
        state.secondsPerQuestion > 0
          ? Math.max(0, Math.min(100, (state.timeLeft / state.secondsPerQuestion) * 100))
          : 0;
      dom.timerBarFill.style.width = `${pct}%`;
    }
    if (dom.timerCard) {
      dom.timerCard.classList.toggle("urgent", state.timeLeft <= 10 && state.phase === "playing");
    }
  }

  function getSortedLeaderboard() {
    return Object.entries(state.scores)
      .map(([name, score]) => ({ name, score }))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  }

  function renderTopThreeInto(container, sorted) {
    if (!container) return;
    const medals = ["🥇", "🥈", "🥉"];
    container.innerHTML = "";
    for (let i = 0; i < 3; i += 1) {
      const entry = sorted[i];
      const card = document.createElement("div");
      card.className = `podium-card podium-${i + 1}`;
      card.id = container.id === "topThree" ? `podium${i + 1}` : `finalPodium${i + 1}`;

      const medalEl = document.createElement("div");
      medalEl.className = "podium-medal";
      medalEl.textContent = medals[i];

      const nameEl = document.createElement("div");
      nameEl.className = "podium-name";
      nameEl.textContent = entry ? entry.name : "Chưa có";

      const scoreEl = document.createElement("div");
      scoreEl.className = "podium-score";
      scoreEl.textContent = `${entry ? entry.score : 0} điểm`;

      card.appendChild(medalEl);
      card.appendChild(nameEl);
      card.appendChild(scoreEl);
      container.appendChild(card);
    }
  }

  function renderLeaderboardListInto(container, sorted, startIndex, maxItems) {
    if (!container) return;
    container.innerHTML = "";
    const slice = sorted.slice(startIndex, startIndex + maxItems);
    slice.forEach((entry, idx) => {
      const li = document.createElement("li");
      li.className = "lb-item";

      const left = document.createElement("span");
      left.className = "lb-left";

      const rank = document.createElement("span");
      rank.className = "lb-rank";
      rank.textContent = `#${startIndex + idx + 1}`;

      const name = document.createElement("span");
      name.className = "lb-name";
      name.textContent = entry.name;

      const pts = document.createElement("span");
      pts.className = "lb-pts";
      pts.textContent = `${entry.score}đ`;

      left.appendChild(rank);
      left.appendChild(name);
      li.appendChild(left);
      li.appendChild(pts);
      container.appendChild(li);
    });
  }

  function renderLeaderboard() {
    const sorted = getSortedLeaderboard();
    if (dom.playerCount) {
      dom.playerCount.textContent = `${sorted.length} người chơi`;
    }
    renderTopThreeInto(dom.topThree, sorted);
    renderLeaderboardListInto(dom.leaderboardList, sorted, 3, 8);
  }

  function renderComments() {
    if (!dom.commentFeed) return;
    dom.commentFeed.innerHTML = "";
    if (!state.comments.length) {
      const empty = document.createElement("li");
      empty.className = "comment-empty";
      empty.textContent = "Đang chờ bình luận từ người xem...";
      dom.commentFeed.appendChild(empty);
      return;
    }

    for (const item of state.comments) {
      const li = document.createElement("li");
      li.className = "comment-item" + (item.correct ? " comment-correct" : "");

      const body = document.createElement("span");
      body.className = "comment-body";

      const userEl = document.createElement("span");
      userEl.className = "comment-user";
      userEl.textContent = item.user;

      const textEl = document.createElement("span");
      textEl.className = "comment-text";
      textEl.textContent = item.text;

      body.appendChild(userEl);
      body.appendChild(textEl);
      li.appendChild(body);

      if (item.correct) {
        const badge = document.createElement("span");
        badge.className = "comment-badge";
        badge.textContent = "+1 ĐÚNG";
        li.appendChild(badge);
      }

      dom.commentFeed.appendChild(li);
    }
  }

  function showWinnerToast(username) {
    if (!dom.winnerToast || !dom.winnerToastText) return;
    dom.winnerToastText.textContent = `${username} +1 điểm!`;
    dom.winnerToast.hidden = false;

    if (state.timers.toast) {
      clearTimeout(state.timers.toast);
    }
    state.timers.toast = setTimeout(() => {
      if (dom.winnerToast) {
        dom.winnerToast.hidden = true;
      }
      state.timers.toast = null;
    }, 3200);
  }

  function updateControlButtons() {
    if (dom.btnStartPause) {
      if (state.phase === "paused") {
        dom.btnStartPause.textContent = "▶ Tiếp tục";
      } else if (state.phase === "idle" || state.phase === "ended") {
        dom.btnStartPause.textContent = "▶ Bắt đầu";
      } else {
        dom.btnStartPause.textContent = "⏸ Tạm dừng";
      }
    }
    if (dom.pausedPill) {
      dom.pausedPill.hidden = state.phase !== "paused";
    }
    if (dom.modeBadge) {
      dom.modeBadge.textContent = state.mode === "live" ? "LIVE" : "DEMO";
      dom.modeBadge.classList.toggle("is-live", state.mode === "live");
    }
    if (dom.btnModeDemo) {
      dom.btnModeDemo.classList.toggle("active", state.mode === "demo");
    }
    if (dom.btnModeLive) {
      dom.btnModeLive.classList.toggle("active", state.mode === "live");
    }
    if (dom.feedStatus) {
      if (state.mode === "demo") {
        dom.feedStatus.textContent = "Chế độ Demo";
      } else if (state.wsConnected && state.tiktokUsername) {
        dom.feedStatus.textContent = `Trực tiếp @${state.tiktokUsername}`;
      } else {
        dom.feedStatus.textContent = "Chế độ Live (chưa kết nối)";
      }
    }
  }

  /* ==========================
     Game Loop & Timers
     ========================== */

  function clearCountdownTimer() {
    if (state.timers.countdown) {
      clearInterval(state.timers.countdown);
      state.timers.countdown = null;
    }
  }

  function clearRevealTimer() {
    if (state.timers.reveal) {
      clearTimeout(state.timers.reveal);
      state.timers.reveal = null;
    }
  }

  function startCountdownInterval() {
    clearCountdownTimer();
    state.timers.countdown = setInterval(() => {
      if (state.phase !== "playing") return;
      // Live mode: chưa nối live thì ĐỨNG ở câu hiện tại, chờ live (Cơ 27/11)
      // — không đếm ngược, không chạy bot demo. Nối live xong tự đếm tiếp.
      if (state.mode === "live" && !state.tiktokConnected) return;
      state.timeLeft -= 1;
      renderTimer();
      if (state.timeLeft <= 0) {
        revealAnswer(null, null);
      }
    }, 1000);
  }

  function scheduleAutoAdvance(delayMs) {
    clearRevealTimer();
    const wait = typeof delayMs === "number" ? Math.max(0, delayMs) : state.revealDurationMs;
    state.revealRemainingMs = wait;
    state.revealStartedAt = Date.now();
    state.timers.reveal = setTimeout(() => {
      state.timers.reveal = null;
      if (state.phase === "reveal") {
        advanceToNext();
      }
    }, wait);
  }

  function loadQuestion(index, options) {
    const opts = options || {};
    clearCountdownTimer();
    clearRevealTimer();
    stopSpeech();

    if (!state.questions.length) return;
    if (index >= state.questions.length) {
      showEndScreen();
      return;
    }

    state.currentIndex = Math.max(0, index);
    state.phase = "playing";
    state.pausedFromPhase = null;
    state.timeLeft = state.secondsPerQuestion;
    state.currentWinner = null;
    state.botCommentsOnQuestion = 0;

    if (dom.endScreen) {
      dom.endScreen.hidden = true;
    }

    const q = getCurrentQuestion();
    renderQuestion(q);
    renderTimer();
    updateControlButtons();

    startCountdownInterval();
    if (!opts.silent) {
      speakQuestion(q);
    }

    if (state.mode === "demo" && !state.timers.demoBot) {
      startDemoBots();
    }
  }

  function revealAnswer(winnerName, matchedText) {
    if (state.phase === "reveal" || state.phase === "ended") return;
    const q = getCurrentQuestion();
    if (!q) return;

    clearCountdownTimer();
    state.phase = "reveal";
    state.currentWinner = winnerName || null;

    if (winnerName) {
      state.scores[winnerName] = (state.scores[winnerName] || 0) + 1;
      renderLeaderboard();
      showWinnerToast(winnerName);
    }

    renderLetterBoxes(q, true);
    renderTimer();

    if (dom.revealPanel) {
      dom.revealPanel.hidden = false;
    }
    if (dom.revealStatus) {
      dom.revealStatus.textContent = winnerName
        ? `🎉 Chúc mừng ${winnerName} trả lời đúng (${matchedText})! +1 điểm`
        : "⏰ Hết giờ! Đáp án chính xác là:";
    }
    if (dom.revealHanzi) {
      dom.revealHanzi.textContent = q.hanzi;
    }
    if (dom.revealPinyin) {
      dom.revealPinyin.textContent = `(${q.pinyin})`;
    }
    if (dom.revealMeaning) {
      dom.revealMeaning.textContent = q.meaning_vi;
    }
    if (dom.revealExampleZh) {
      dom.revealExampleZh.textContent = q.example_zh;
    }
    if (dom.revealExampleVi) {
      dom.revealExampleVi.textContent = q.example_vi;
    }
    if (dom.revealAdvance) {
      const isLast = state.currentIndex + 1 >= state.questions.length;
      dom.revealAdvance.textContent = isLast
        ? "Đang tổng kết bảng xếp hạng..."
        : `Tự động chuyển sang câu ${state.currentIndex + 2} sau vài giây...`;
    }

    launchConfetti();
    speakReveal(q);
    updateControlButtons();
    scheduleAutoAdvance(state.revealDurationMs);
  }

  function advanceToNext() {
    clearCountdownTimer();
    clearRevealTimer();
    if (state.currentIndex + 1 >= state.questions.length) {
      showEndScreen();
      return;
    }
    loadQuestion(state.currentIndex + 1);
  }

  function showEndScreen() {
    clearCountdownTimer();
    clearRevealTimer();
    stopDemoBots();
    stopSpeech();

    state.phase = "ended";
    updateControlButtons();

    const sorted = getSortedLeaderboard();
    renderTopThreeInto(dom.finalTopThree, sorted);
    renderLeaderboardListInto(dom.finalLeaderboardList, sorted, 3, 12);

    if (dom.endScreen) {
      dom.endScreen.hidden = false;
    }
  }

  function startGame() {
    if (!state.questions.length) return;
    if (dom.endScreen) {
      dom.endScreen.hidden = true;
    }
    loadQuestion(0);
    if (state.mode === "demo") {
      startDemoBots();
    }
  }

  function pauseGame() {
    if (state.phase !== "playing" && state.phase !== "reveal") return;
    state.pausedFromPhase = state.phase;

    if (state.phase === "playing") {
      clearCountdownTimer();
    } else if (state.phase === "reveal") {
      const elapsed = Date.now() - state.revealStartedAt;
      state.revealRemainingMs = Math.max(500, state.revealRemainingMs - elapsed);
      clearRevealTimer();
    }

    state.phase = "paused";
    stopSpeech();
    updateControlButtons();
  }

  function resumeGame() {
    if (state.phase !== "paused") return;
    const prev = state.pausedFromPhase || "playing";
    state.pausedFromPhase = null;
    state.phase = prev;
    updateControlButtons();

    if (prev === "playing") {
      startCountdownInterval();
    } else if (prev === "reveal") {
      scheduleAutoAdvance(state.revealRemainingMs);
    }
  }

  function togglePause() {
    if (state.phase === "idle" || state.phase === "ended") {
      startGame();
    } else if (state.phase === "paused") {
      resumeGame();
    } else {
      pauseGame();
    }
  }

  function resetScores() {
    state.scores = Object.create(null);
    state.comments = [];
    renderLeaderboard();
    renderComments();
  }

  function setSecondsPerQuestion(sec) {
    const parsed = Number.parseInt(sec, 10);
    if (Number.isNaN(parsed)) return state.secondsPerQuestion;
    const clamped = Math.max(MIN_SECONDS, Math.min(MAX_SECONDS, parsed));
    state.secondsPerQuestion = clamped;
    if (dom.inputSeconds) {
      dom.inputSeconds.value = String(clamped);
    }
    if (state.phase === "playing" && state.timeLeft > clamped) {
      state.timeLeft = clamped;
      renderTimer();
    }
    return clamped;
  }

  function setRevealDuration(ms) {
    const val = Number(ms);
    if (Number.isFinite(val) && val >= 50) {
      state.revealDurationMs = val;
    }
  }

  /* ==========================
     Comments & Demo Bots
     ========================== */

  function pushComment(user, text, correct) {
    state.comments.unshift({
      user: String(user || "Khách"),
      text: String(text || ""),
      correct: Boolean(correct),
      ts: Date.now()
    });
    if (state.comments.length > MAX_COMMENTS) {
      state.comments.length = MAX_COMMENTS;
    }
    renderComments();
  }

  function handleComment(user, text) {
    const cleanUser = String(user || "Người xem").trim() || "Người xem";
    const cleanText = String(text || "").trim();
    if (!cleanText) return false;

    const q = getCurrentQuestion();
    const canScore = state.phase === "playing" && q && !state.currentWinner;
    const isCorrect = canScore ? isAnswerCorrect(q, cleanText) : false;

    pushComment(cleanUser, cleanText, isCorrect);

    if (isCorrect) {
      revealAnswer(cleanUser, cleanText);
      return true;
    }
    return false;
  }

  function pickDemoBotComment(question, countOnQuestion) {
    const botName =
      DEMO_BOT_NAMES[Math.floor(Math.random() * DEMO_BOT_NAMES.length)];

    // Let first 1-2 comments usually be wrong for realistic chat flow, then higher chance to solve
    const solveChance = countOnQuestion < 2 ? 0.2 : 0.52;
    const shouldSolve = Math.random() < solveChance;

    if (!shouldSolve) {
      const wrongPool =
        question.direction === "vi-zh" ? WRONG_ZH_GUESSES : WRONG_VI_GUESSES;
      let guess = wrongPool[Math.floor(Math.random() * wrongPool.length)];
      if (isAnswerCorrect(question, guess)) {
        guess = "không biết nữa";
      }
      return { user: botName, text: guess };
    }

    if (question.direction === "vi-zh") {
      // Sometimes hanzi, sometimes toneless pinyin
      if (Math.random() < 0.5) {
        return { user: botName, text: question.hanzi };
      }
      return { user: botName, text: normalizePinyin(question.pinyin) };
    }

    const alts = getMeaningAlternatives(question.meaning_vi);
    const chosen = alts[Math.floor(Math.random() * alts.length)] || question.meaning_vi;
    const text = Math.random() < 0.5 ? chosen : normalizeVietnamese(chosen);
    return { user: botName, text };
  }

  function startDemoBots(intervalMs) {
    stopDemoBots();
    const period = typeof intervalMs === "number" && intervalMs >= 100 ? intervalMs : 2200;
    state.timers.demoBot = setInterval(() => {
      if (state.mode !== "demo" || state.phase !== "playing") return;
      const q = getCurrentQuestion();
      if (!q) return;
      const { user, text } = pickDemoBotComment(q, state.botCommentsOnQuestion);
      state.botCommentsOnQuestion += 1;
      handleComment(user, text);
    }, period);
  }

  function stopDemoBots() {
    if (state.timers.demoBot) {
      clearInterval(state.timers.demoBot);
      state.timers.demoBot = null;
    }
  }

  /* ==========================
     Live Mode WebSocket Client
     ========================== */

  function setWsStatus(text) {
    if (dom.wsStatus) {
      dom.wsStatus.textContent = text;
    }
  }

  // Trang Pages không nối WebSocket nội bộ: server trên VM tự nối TikTok
  // và publish bình luận/quà lên Ably. Nút "Ngắt" chỉ báo trạng thái.
  function disconnectLive() {
    setWsStatus("Máy chủ tự nối TikTok — trang Pages nhận qua Ably.");
    updateControlButtons();
  }

  // Trang Pages không cần nhập username: server tự nối @1percent.moingay.
  // Nút "Kết nối" chỉ (re)connect Ably để nhận bình luận.
  function connectLive(rawUsername) {
    const username = String(rawUsername || "").trim().replace(/^@+/, "");
    if (username) {
      state.tiktokUsername = username;
    }
    setMode("live");
    connectAbly();
  }

  function getAblyConfig() {
    const fromFile = (typeof window !== "undefined" && window.ABLY_CONFIG) || {};
    let params = null;
    try {
      params = new URLSearchParams(window.location.search || "");
    } catch (_) {
      params = null;
    }
    return {
      key: (params && params.get("ablyKey")) || fromFile.key || "",
      channel: (params && params.get("ablyChannel")) || fromFile.channel || "tieng-trung-live"
    };
  }

  // Ably tự reconnect: rớt < ~2 phút thì resume + replay đúng thứ tự các
  // message bị miss; rớt lâu hơn thì channel attach lại với resumed=false
  // (lúc đó chỉ nhận message mới).
  // SDK: @ably/pubsub-device 3.x (global AblyPubSub, API createClient).
  // SDK cổ điển `ably` v2 bị tài khoản MAU pricing từ chối (lỗi 40168).
  function connectAbly() {
    if (typeof AblyPubSub === "undefined" || typeof AblyPubSub.createClient !== "function") {
      setWsStatus("Không tải được Ably SDK.");
      return;
    }
    const cfg = getAblyConfig();
    if (!cfg.key) {
      setWsStatus("Chưa cấu hình Ably key.");
      return;
    }
    if (state.ably) return; // đã nối rồi — không tạo client mới

    // Tài khoản MAU bắt buộc clientId trên device (không có thì 401).
    const realtime = AblyPubSub.createClient({
      key: cfg.key,
      clientId: "obs-tieng-trung"
    });
    state.ably = realtime;

    realtime.connection.on("connected", () => {
      state.ablyConnected = true;
      setWsStatus("Ably: Đã nối");
    });
    realtime.connection.on("disconnected", () => {
      state.ablyConnected = false;
      setWsStatus("Ably: Đang nối lại…");
    });
    realtime.connection.on("suspended", () => {
      state.ablyConnected = false;
      setWsStatus("Ably: Tạm mất nối");
    });
    realtime.connection.on("failed", (err) => {
      state.ablyConnected = false;
      setWsStatus("Ably: Lỗi kết nối");
      console.error("[Ably] connection failed:", err && err.message ? err.message : err);
    });

    const channel = realtime.channels.get(cfg.channel);
    state.ablyChannel = channel;

    channel.on("attached", (change) => {
      // Lần attach đầu resumed=false là bình thường. Attach lại sau mà
      // resumed=false nghĩa là Ably không resume được — có thể đã miss
      // vài bình luận trong lúc rớt (hơn ~2 phút); game vẫn chạy tiếp
      // với bình luận mới.
      if (state.ablyAttachedOnce && change && change.resumed === false) {
        console.warn("[Ably] channel re-attached without resume — có thể thiếu vài bình luận");
        setWsStatus("Ably: Đã nối lại (có thể thiếu vài bình luận)");
      }
      state.ablyAttachedOnce = true;
    });
    channel.on("failed", (err) => {
      setWsStatus("Ably: Không attach được channel");
      console.error("[Ably] channel failed:", err && err.message ? err.message : err);
    });

    channel.subscribe("comment", onAblyComment);
    channel.subscribe("status", onAblyStatus);
    channel.subscribe("gift", onAblyGift);
  }

  function parseAblyData(raw) {
    if (raw && typeof raw === "object") return raw;
    if (typeof raw === "string") {
      try { return JSON.parse(raw); } catch (_) { return null; }
    }
    return null;
  }

  function onAblyComment(msg) {
    // Chống trùng khi Ably replay sau reconnect (mỗi message có id duy nhất)
    if (msg.id) {
      if (state.seenMsgIds.has(msg.id)) return;
      state.seenMsgIds.add(msg.id);
      if (state.seenMsgIds.size > 500) {
        const first = state.seenMsgIds.values().next().value;
        state.seenMsgIds.delete(first);
      }
    }
    const data = parseAblyData(msg.data);
    if (!data || typeof data.text !== "string") return;
    // Chỉ nhận bình luận từ sau lúc trang tải (trừ 10s sai lệch đồng hồ):
    // Ably có thể replay message trong ~2 phút khi resume sau rớt mạng.
    const ts = Number(data.timestamp || msg.timestamp || 0);
    if (ts && ts < state.pageLoadTs - 10000) return;
    handleComment(data.user || data.username || "Khán giả", data.text);
  }

  function onAblyGift(msg) {
    // Chống trùng + lọc quà cũ: cùng cơ chế như bình luận.
    if (msg.id) {
      if (state.seenMsgIds.has(msg.id)) return;
      state.seenMsgIds.add(msg.id);
      if (state.seenMsgIds.size > 500) {
        const first = state.seenMsgIds.values().next().value;
        state.seenMsgIds.delete(first);
      }
    }
    const data = parseAblyData(msg.data);
    if (!data || typeof data.giftName !== "string") return;
    const ts = Number(data.timestamp || msg.timestamp || 0);
    if (ts && ts < state.pageLoadTs - 10000) return;
    handleIncomingGift(data);
  }

  function onAblyStatus(msg) {
    const data = parseAblyData(msg.data);
    if (!data) return;
    const wasConnected = Boolean(state.tiktokConnected);
    state.wsConnected = Boolean(data.connected);
    state.tiktokConnected = Boolean(data.connected);
    state.tiktokUsername = data.username || "";
    state.viewerCount = Number(data.viewerCount || 0);

    if (state.wsConnected) {
      setWsStatus(data.message ? `Ably: ${data.message}` : `Ably: @${state.tiktokUsername}`);
      if (state.mode === "demo") {
        // Live đã nối: tắt bot demo để bình luận thật làm chủ.
        // (Đặt mode trực tiếp, không qua setMode — setMode ghi đè dòng trạng thái Ably.)
        state.mode = "live";
        stopDemoBots();
      }
    } else {
      setWsStatus(data.message ? `Ably: ${data.message}` : "Ably: Chưa có live");
    }
    // Vừa nối live: đọc lại câu hiện tại cho người xem mới vào (Cơ 27/11).
    if (!wasConnected && state.wsConnected && state.mode === "live" && state.phase === "playing") {
      reread();
    }
    updateControlButtons();
  }

  // Quà tặng (bản gốc không có): chỉ hiện toast + cảm ơn bằng giọng —
  // KHÔNG chạm điểm số hay luật chơi.
  function showGiftToast(user, giftName, coins) {
    if (!dom.winnerToast || !dom.winnerToastText) return;
    dom.winnerToastText.textContent = `🎁 ${user} tặng ${giftName} (${coins} xu)!`;
    dom.winnerToast.hidden = false;

    if (state.timers.toast) {
      clearTimeout(state.timers.toast);
    }
    state.timers.toast = setTimeout(() => {
      if (dom.winnerToast) {
        dom.winnerToast.hidden = true;
      }
      state.timers.toast = null;
    }, 3200);
  }

  function handleIncomingGift(data) {
    if (!data) return;
    const user = String(data.user || data.username || "Khán giả").trim() || "Khán giả";
    const giftName = String(data.giftName || data.gift || "Quà");
    const coins = Math.max(0, Number(data.coins ?? data.diamondCount ?? 0) || 0);
    showGiftToast(user, giftName, coins);
    speakSegments([{ text: `Cảm ơn ${user} đã tặng ${giftName}!`, lang: "vi-VN" }]);
  }

  function setMode(newMode) {
    const mode = newMode === "live" ? "live" : "demo";
    state.mode = mode;
    if (mode === "demo") {
      disconnectLive();
      if (state.phase === "playing" || state.phase === "reveal") {
        startDemoBots();
      }
      setWsStatus("Demo đang chạy • Space: dừng/chạy • S: đọc lại");
    } else {
      stopDemoBots();
      setWsStatus("Chế độ Live • Nhập @username TikTok rồi bấm Kết nối");
    }
    updateControlButtons();
  }

  /* ==========================
     Data Loading & Init
     ========================== */

  async function loadQuestionsData() {
    const fallback = Array.isArray(EMBEDDED_QUESTIONS) ? EMBEDDED_QUESTIONS : [];
    const canFetch =
      typeof window !== "undefined" &&
      window.location &&
      window.location.protocol !== "file:" &&
      typeof fetch === "function";

    if (!canFetch) {
      return fallback;
    }

    try {
      const res = await fetch("questions.json");
      if (!res.ok) return fallback;
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (_) {
      // Fallback cleanly to embedded questions
    }
    return fallback;
  }

  function cacheDom() {
    dom = {
      appShell: document.getElementById("appShell"),
      confettiCanvas: document.getElementById("confettiCanvas"),
      winnerToast: document.getElementById("winnerToast"),
      winnerToastText: document.getElementById("winnerToastText"),
      modeBadge: document.getElementById("modeBadge"),
      questionProgress: document.getElementById("questionProgress"),
      directionPill: document.getElementById("directionPill"),
      pausedPill: document.getElementById("pausedPill"),
      timerCard: document.getElementById("timerCard"),
      timerValue: document.getElementById("timerValue"),
      timerBarFill: document.getElementById("timerBarFill"),
      promptMain: document.getElementById("promptMain"),
      promptPinyin: document.getElementById("promptPinyin"),
      promptSub: document.getElementById("promptSub"),
      letterBoxes: document.getElementById("letterBoxes"),
      hintContent: document.getElementById("hintContent"),
      revealPanel: document.getElementById("revealPanel"),
      revealStatus: document.getElementById("revealStatus"),
      revealHanzi: document.getElementById("revealHanzi"),
      revealPinyin: document.getElementById("revealPinyin"),
      revealMeaning: document.getElementById("revealMeaning"),
      revealExampleZh: document.getElementById("revealExampleZh"),
      revealExampleVi: document.getElementById("revealExampleVi"),
      revealAdvance: document.getElementById("revealAdvance"),
      playerCount: document.getElementById("playerCount"),
      topThree: document.getElementById("topThree"),
      leaderboardList: document.getElementById("leaderboardList"),
      feedStatus: document.getElementById("feedStatus"),
      commentFeed: document.getElementById("commentFeed"),
      endScreen: document.getElementById("endScreen"),
      finalTopThree: document.getElementById("finalTopThree"),
      finalLeaderboardList: document.getElementById("finalLeaderboardList"),
      btnPlayAgain: document.getElementById("btnPlayAgain"),
      hostControls: document.getElementById("hostControls"),
      btnStartPause: document.getElementById("btnStartPause"),
      btnNext: document.getElementById("btnNext"),
      btnReset: document.getElementById("btnReset"),
      inputSeconds: document.getElementById("inputSeconds"),
      toggleTts: document.getElementById("toggleTts"),
      btnReread: document.getElementById("btnReread"),
      btnModeDemo: document.getElementById("btnModeDemo"),
      btnModeLive: document.getElementById("btnModeLive"),
      inputUsername: document.getElementById("inputUsername"),
      btnConnect: document.getElementById("btnConnect"),
      wsStatus: document.getElementById("wsStatus")
    };
  }

  function isCleanModeEnabled() {
    if (
      typeof document !== "undefined" &&
      document.documentElement &&
      (document.documentElement.dataset.clean === "1" ||
        document.documentElement.classList.contains("clean-mode"))
    ) {
      return true;
    }

    const cleanRe = /(?:^|[?&#])clean=(?:1|true)(?:$|[&/?#])/i;
    const loc = typeof window !== "undefined" && window.location ? window.location : null;
    if (loc) {
      const search = String(loc.search || "");
      const hash = String(loc.hash || "");
      const href = String(loc.href || "");

      try {
        const params = new URLSearchParams(search);
        const val = (params.get("clean") || "")
          .trim()
          .toLowerCase()
          .replace(/\/+$/, "")
          .split("?")[0];
        if (val === "1" || val === "true") {
          return true;
        }
      } catch (_) {
        // fall through to regex check
      }

      if (cleanRe.test(search) || cleanRe.test(hash) || cleanRe.test(href)) {
        return true;
      }
    }

    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      try {
        const parentHref = String(window.parent.location.href || "");
        if (cleanRe.test(parentHref)) {
          return true;
        }
      } catch (_) {
        // Cross-origin parent frame: ignore safely
      }
    }

    return false;
  }

  function applyCleanMode(enabled) {
    state.cleanMode = Boolean(enabled);
    if (typeof document === "undefined") return;

    if (document.documentElement) {
      document.documentElement.classList.toggle("clean-mode", state.cleanMode);
      if (state.cleanMode) {
        document.documentElement.dataset.clean = "1";
      } else {
        delete document.documentElement.dataset.clean;
      }
    }

    if (document.body) {
      document.body.classList.toggle("clean-mode", state.cleanMode);
    }

    if (dom.hostControls) {
      dom.hostControls.hidden = state.cleanMode;
      if (state.cleanMode) {
        dom.hostControls.setAttribute("aria-hidden", "true");
        dom.hostControls.style.setProperty("display", "none", "important");
      } else {
        dom.hostControls.removeAttribute("aria-hidden");
        dom.hostControls.style.removeProperty("display");
      }
    }
  }

  function applyQueryParams() {
    const search =
      typeof window !== "undefined" && window.location ? window.location.search : "";
    const params = new URLSearchParams(search);

    applyCleanMode(isCleanModeEnabled());

    if (params.has("sec")) {
      setSecondsPerQuestion(params.get("sec"));
    }

    // Mặc định LIVE (Cơ 27/11): mở link OBS (?obs=1 hoặc ?live=<username>)
    // là vào thẳng chế độ live, nhận bình luận thật. Demo chỉ khi mở
    // tường minh ?mode=demo. (Trước đây chỉ ?mode=live mới chuyển live
    // nên link OBS vẫn chạy bot demo.)
    if (params.get("mode") === "demo") {
      state.mode = "demo";
    } else if (
      params.get("mode") === "live" ||
      params.get("obs") === "1" ||
      params.has("live")
    ) {
      state.mode = "live";
    }

    return {
      autostart: params.get("autostart") !== "0"
    };
  }

  function isEditableTarget(target) {
    if (!target || !target.tagName) return false;
    const tag = target.tagName.toUpperCase();
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
  }

  function bindEvents() {
    if (dom.btnStartPause) {
      dom.btnStartPause.addEventListener("click", () => togglePause());
    }
    if (dom.btnNext) {
      dom.btnNext.addEventListener("click", () => advanceToNext());
    }
    if (dom.btnReset) {
      dom.btnReset.addEventListener("click", () => resetScores());
    }
    if (dom.btnPlayAgain) {
      dom.btnPlayAgain.addEventListener("click", () => {
        resetScores();
        startGame();
      });
    }
    if (dom.inputSeconds) {
      dom.inputSeconds.addEventListener("change", (e) => {
        setSecondsPerQuestion(e.target.value);
      });
    }
    if (dom.toggleTts) {
      dom.toggleTts.addEventListener("change", (e) => {
        state.ttsEnabled = Boolean(e.target.checked);
        if (!state.ttsEnabled) {
          stopSpeech();
        }
      });
    }
    if (dom.btnReread) {
      dom.btnReread.addEventListener("click", () => reread());
    }
    if (dom.btnModeDemo) {
      dom.btnModeDemo.addEventListener("click", () => setMode("demo"));
    }
    if (dom.btnModeLive) {
      dom.btnModeLive.addEventListener("click", () => setMode("live"));
    }
    if (dom.btnConnect) {
      dom.btnConnect.addEventListener("click", () => {
        connectLive(dom.inputUsername ? dom.inputUsername.value : "");
      });
    }
    if (dom.inputUsername) {
      dom.inputUsername.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          connectLive(dom.inputUsername.value);
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (isEditableTarget(e.target)) return;
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        togglePause();
      } else if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        reread();
      }
    });

    if (typeof window !== "undefined") {
      const syncClean = () => applyCleanMode(isCleanModeEnabled());
      window.addEventListener("hashchange", syncClean);
      window.addEventListener("popstate", syncClean);
    }
  }

  function destroy() {
    clearCountdownTimer();
    clearRevealTimer();
    stopDemoBots();
    disconnectLive();
    stopSpeech();
    if (state.timers.toast) {
      clearTimeout(state.timers.toast);
      state.timers.toast = null;
    }
    if (state.timers.confettiRaf && typeof cancelAnimationFrame === "function") {
      cancelAnimationFrame(state.timers.confettiRaf);
      state.timers.confettiRaf = null;
    }
  }

  async function init() {
    cacheDom();
    bindEvents();
    const { autostart } = applyQueryParams();

    state.questions = await loadQuestionsData();
    renderLeaderboard();
    renderComments();
    updateControlButtons();
    connectAbly(); // bản Pages nhận bình luận/quà qua Ably

    if (autostart && state.questions.length > 0) {
      startGame();
    } else if (state.questions.length > 0) {
      renderQuestion(state.questions[0]);
      renderTimer();
    }
  }

  const api = {
    EMBEDDED_QUESTIONS,
    normalizePinyin,
    normalizeVietnamese,
    getFirstMeaning,
    getMeaningAlternatives,
    isAnswerCorrect,
    buildQuestionSpeech,
    buildRevealSpeech,
    speakQuestion,
    speakReveal,
    stopSpeech,
    reread,
    startGame,
    loadQuestion,
    revealAnswer,
    advanceToNext,
    showEndScreen,
    pauseGame,
    resumeGame,
    togglePause,
    resetScores,
    setSecondsPerQuestion,
    setRevealDuration,
    handleComment,
    handleIncomingGift,
    connectAbly,
    startDemoBots,
    stopDemoBots,
    setMode,
    connectLive,
    disconnectLive,
    getCurrentQuestion,
    getSortedLeaderboard,
    getState: () => state,
    destroy
  };

  if (typeof window !== "undefined") {
    window.GameApp = api;
    window.startDemoBots = startDemoBots;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})();
