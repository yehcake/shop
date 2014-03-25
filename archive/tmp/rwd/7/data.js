function getMilliseconds(days) {
  var milliseconds = 24 * 60 * 60 * 1000;
  return (days * milliseconds);
}

function getDayOfWeek(day, lang) {
  var result;
  if (lang == "zh-tw") {
    switch (day) {
      case 0 : result = "日"; break;
      case 1 : result = "一"; break;       
      case 2 : result = "二"; break;
      case 3 : result = "三"; break;
      case 4 : result = "四"; break;
      case 5 : result = "五"; break;
      case 6 : result = "六"; break;
      default : result = "";
    }
  } else {
    switch (day) {
      case 0 : result = "Su"; break;
      case 1 : result = "M"; break;       
      case 2 : result = "Tu"; break;
      case 3 : result = "W"; break;
      case 4 : result = "Th"; break;
      case 5 : result = "F"; break;
      case 6 : result = "Sa"; break;
      default : result = "";
    }
  }
  return result;
}

function getLocalDate(dateObj) {
  var yy = dateObj.getFullYear();
  var mm = dateObj.getMonth() + 1;
  var dd = dateObj.getDate();
  var day = dateObj.getDay();
  return (yy + "年" + mm + "月" + dd + "日 星期" + getDayOfWeek(day, "zh-tw") + " (" + getDayOfWeek(day, "en-us") + ")");
}

function getOption(value, text) {
  var result = {};
  result.value = value;
  result.text = text;
  return result;
}

function getOptionAutoComplete(value, text, filterText) {
  var result = {};
  result.value = value;
  result.text = text;
  result.filterText = filterText;
  return result;
}

function getDates(days, offset) {
  var now = new Date();
  now.setHours(0, 0, 0, 0);
  var start = now.getTime() + getMilliseconds(offset);
  var results = [];
  for (var i = 0; i < days; i++) {
    now.setTime(start + (i * getMilliseconds(1)));
    results.push(getOption(now.getTime(), getLocalDate(now)));
  }
  return results;
}

function getTimes(start, end, increment) {
  var results = [];
  var text;
  for (var i = start; i < end; i++) {
    for (var j = 0; j < 60/increment; j++) {
      if ((j*increment) < 10) {
        text = i + ":" + "0" + (j*increment);
      } else {
        text = i + ":" + (j*increment);
      }
      results.push(getOption((i * 60 + (j*increment)) * 60 * 1000, text));      
    }
  }
  return results;
}

function getQuantities(start, end, increment) {
  var results = [];
  for (var i = 0; i <= (end-start)/increment; i++) {
    results.push(getOption(start + i*increment, start + i*increment));      
  }
  return results;  
}

function getFlavors() {
  var results = [];
  results.push(getOption("巧克力 Chocolate", "巧克力 Chocolate"));
  results.push(getOption("紅絲絨 Red Velvet", "紅絲絨 Red Velvet"));
  results.push(getOption("香草 Vanilla", "香草 Vanilla"));
  results.push(getOption("香蕉 Banana", "香蕉 Banana"));
  results.push(getOption("胡蘿蔔蛋糕 Carrot Cake", "胡蘿蔔蛋糕 Carrot Cake"));
  return results;  
}

function getPostalCodes() {
  var results = [];
  results.push(getOptionAutoComplete(100, "100 臺北市 中正區 (Zhōngzhèng qū, Taipei)", "100 臺北市 台北市 中正區 Taipei Zhōngzhèng qū"));
  results.push(getOptionAutoComplete(103, "103 臺北市 大同區 (Dàtóng qū, Taipei)", "103 臺北市 台北市 大同區 Taipei Dàtóng qū"));
  results.push(getOptionAutoComplete(104, "104 臺北市 中山區 (Zhōngshān qū, Taipei)", "104 臺北市 台北市 中山區 Taipei Zhōngshān qū"));
  results.push(getOptionAutoComplete(105, "105 臺北市 松山區 (Sōngshān qū, Taipei)", "105 臺北市 台北市 松山區 Taipei Sōngshān qū"));
  results.push(getOptionAutoComplete(106, "106 臺北市 大安區 (Dà'ān qū, Taipei)", "106 臺北市 台北市 大安區 Taipei Dà'ān qū"));
  results.push(getOptionAutoComplete(108, "108 臺北市 萬華區 (Wàn huá qū, Taipei)", "108 臺北市 台北市 萬華區 Taipei Wàn huá qū"));
  results.push(getOptionAutoComplete(110, "110 臺北市 信義區 (Xìnyì qū, Taipei)", "110 臺北市 台北市 信義區 Taipei Xìnyì qū"));
  results.push(getOptionAutoComplete(111, "111 臺北市 士林區 (Shì lín qū, Taipei)", "111 臺北市 台北市 士林區 Taipei Shì lín qū"));
  results.push(getOptionAutoComplete(112, "112 臺北市 北投區 (Běi tóu qū, Taipei)", "112 臺北市 台北市 北投區 Taipei Běi tóu qū"));
  results.push(getOptionAutoComplete(114, "114 臺北市 內湖區 (Nèi húqū, Taipei)", "114 臺北市 台北市 內湖區 Taipei Nèi húqū"));
  results.push(getOptionAutoComplete(115, "115 臺北市 南港區 (Nángǎng qū, Taipei)", "115 臺北市 台北市 南港區 Taipei Nángǎng qū"));
  results.push(getOptionAutoComplete(116, "116 臺北市 文山區 (Wénshān qū, Taipei)", "116 臺北市 台北市 文山區 Taipei Wénshān qū"));
  results.push(getOptionAutoComplete(200, "200 基隆市 仁愛區 (Rén'ài qū, Keelung)", "200 基隆市  仁愛區 Keelung Rén'ài qū"));
  results.push(getOptionAutoComplete(201, "201 基隆市 信義區 (Xìnyì qū, Keelung)", "201 基隆市  信義區 Keelung Xìnyì qū"));
  results.push(getOptionAutoComplete(202, "202 基隆市 中正區 (Zhōngzhèng qū, Keelung)", "202 基隆市  中正區 Keelung Zhōngzhèng qū"));
  results.push(getOptionAutoComplete(203, "203 基隆市 中山區 (Zhōngshān qū, Keelung)", "203 基隆市  中山區 Keelung Zhōngshān qū"));
  results.push(getOptionAutoComplete(204, "204 基隆市 安樂區 (Ānlè qū, Keelung)", "204 基隆市  安樂區 Keelung Ānlè qū"));
  results.push(getOptionAutoComplete(205, "205 基隆市 暖暖區 (Nuǎn nuǎn qū, Keelung)", "205 基隆市  暖暖區 Keelung Nuǎn nuǎn qū"));
  results.push(getOptionAutoComplete(206, "206 基隆市 七堵區 (Qī dǔ qū, Keelung)", "206 基隆市  七堵區 Keelung Qī dǔ qū"));
  results.push(getOptionAutoComplete(207, "207 新北市 萬里區 (Wàn li qū, New Taipei City)", "207 新北市  萬里區 New Taipei City Wàn li qū"));
  results.push(getOptionAutoComplete(208, "208 新北市 金山區 (Jīnshān qū, New Taipei City)", "208 新北市  金山區 New Taipei City Jīnshān qū"));
  results.push(getOptionAutoComplete(209, "209 連江縣 南竿 (Nán gān, Lianjiang County)", "209 連江縣  南竿 Lianjiang County Nán gān"));
  results.push(getOptionAutoComplete(210, "210 連江縣 北竿 (Běi gān, Lianjiang County)", "210 連江縣  北竿 Lianjiang County Běi gān"));
  results.push(getOptionAutoComplete(211, "211 連江縣 莒光 (Jǔ guāng, Lianjiang County)", "211 連江縣  莒光 Lianjiang County Jǔ guāng"));
  results.push(getOptionAutoComplete(212, "212 連江縣 東引 (Dōng yǐn, Lianjiang County)", "212 連江縣  東引 Lianjiang County Dōng yǐn"));
  results.push(getOptionAutoComplete(220, "220 新北市 板橋區 (Bǎnqiáo qū, New Taipei City)", "220 新北市  板橋區 New Taipei City Bǎnqiáo qū"));
  results.push(getOptionAutoComplete(221, "221 新北市 汐止區 (Xīzhǐ qū, New Taipei City)", "221 新北市  汐止區 New Taipei City Xīzhǐ qū"));
  results.push(getOptionAutoComplete(222, "222 新北市 深坑區 (Shēn kēng qū, New Taipei City)", "222 新北市  深坑區 New Taipei City Shēn kēng qū"));
  results.push(getOptionAutoComplete(223, "223 新北市 石碇區 (Shí dìng qū, New Taipei City)", "223 新北市  石碇區 New Taipei City Shí dìng qū"));
  results.push(getOptionAutoComplete(224, "224 新北市 瑞芳區 (Ruì fāng qū, New Taipei City)", "224 新北市  瑞芳區 New Taipei City Ruì fāng qū"));
  results.push(getOptionAutoComplete(226, "226 新北市 平溪區 (Píng xī qū, New Taipei City)", "226 新北市  平溪區 New Taipei City Píng xī qū"));
  results.push(getOptionAutoComplete(227, "227 新北市 雙溪區 (Shuāng xī qū, New Taipei City)", "227 新北市  雙溪區 New Taipei City Shuāng xī qū"));
  results.push(getOptionAutoComplete(228, "228 新北市 貢寮區 (Gòng liáo qū, New Taipei City)", "228 新北市  貢寮區 New Taipei City Gòng liáo qū"));
  results.push(getOptionAutoComplete(231, "231 新北市 新店區 (Xīndiàn qū, New Taipei City)", "231 新北市  新店區 New Taipei City Xīndiàn qū"));
  results.push(getOptionAutoComplete(232, "232 新北市 坪林區 (Píng lín qū, New Taipei City)", "232 新北市  坪林區 New Taipei City Píng lín qū"));
  results.push(getOptionAutoComplete(233, "233 新北市 烏來區 (Wū lái qū, New Taipei City)", "233 新北市  烏來區 New Taipei City Wū lái qū"));
  results.push(getOptionAutoComplete(234, "234 新北市 永和區 (Yǒnghé qū, New Taipei City)", "234 新北市  永和區 New Taipei City Yǒnghé qū"));
  results.push(getOptionAutoComplete(235, "235 新北市 中和區 (Zhōng hé qū, New Taipei City)", "235 新北市  中和區 New Taipei City Zhōng hé qū"));
  results.push(getOptionAutoComplete(236, "236 新北市 土城區 (Tǔ chéngqū, New Taipei City)", "236 新北市  土城區 New Taipei City Tǔ chéngqū"));
  results.push(getOptionAutoComplete(237, "237 新北市 三峽區 (Sānxiá qū, New Taipei City)", "237 新北市  三峽區 New Taipei City Sānxiá qū"));
  results.push(getOptionAutoComplete(238, "238 新北市 樹林區 (Shùlín qū, New Taipei City)", "238 新北市  樹林區 New Taipei City Shùlín qū"));
  results.push(getOptionAutoComplete(239, "239 新北市 鶯歌區 (Yīng gē qū, New Taipei City)", "239 新北市  鶯歌區 New Taipei City Yīng gē qū"));
  results.push(getOptionAutoComplete(241, "241 新北市 三重區 (Sānchóng qū, New Taipei City)", "241 新北市  三重區 New Taipei City Sānchóng qū"));
  results.push(getOptionAutoComplete(242, "242 新北市 新莊區 (Xīn zhuāng qū, New Taipei City)", "242 新北市  新莊區 New Taipei City Xīn zhuāng qū"));
  results.push(getOptionAutoComplete(243, "243 新北市 泰山區 (Tàishān qū, New Taipei City)", "243 新北市  泰山區 New Taipei City Tàishān qū"));
  results.push(getOptionAutoComplete(244, "244 新北市 林口區 (Línkǒu qū, New Taipei City)", "244 新北市  林口區 New Taipei City Línkǒu qū"));
  results.push(getOptionAutoComplete(247, "247 新北市 蘆洲區 (Lú zhōu qū, New Taipei City)", "247 新北市  蘆洲區 New Taipei City Lú zhōu qū"));
  results.push(getOptionAutoComplete(248, "248 新北市 五股區 (Wǔ gǔ qū, New Taipei City)", "248 新北市  五股區 New Taipei City Wǔ gǔ qū"));
  results.push(getOptionAutoComplete(249, "249 新北市 八里區 (Bālǐ qū, New Taipei City)", "249 新北市  八里區 New Taipei City Bālǐ qū"));
  results.push(getOptionAutoComplete(251, "251 新北市 淡水區 (Dànshuǐ qū, New Taipei City)", "251 新北市  淡水區 New Taipei City Dànshuǐ qū"));
  results.push(getOptionAutoComplete(252, "252 新北市 三芝區 (Sān zhī qū, New Taipei City)", "252 新北市  三芝區 New Taipei City Sān zhī qū"));
  results.push(getOptionAutoComplete(253, "253 新北市 石門區 (Shímén qū, New Taipei City)", "253 新北市  石門區 New Taipei City Shímén qū"));
  results.push(getOptionAutoComplete(260, "260 宜蘭縣 宜蘭 (Yilán, Yilan County)", "260 宜蘭縣  宜蘭 Yilan County Yilán"));
  results.push(getOptionAutoComplete(261, "261 宜蘭縣 頭城 (Tóu chéng, Yilan County)", "261 宜蘭縣  頭城 Yilan County Tóu chéng"));
  results.push(getOptionAutoComplete(262, "262 宜蘭縣 礁溪 (Jiāo xī, Yilan County)", "262 宜蘭縣  礁溪 Yilan County Jiāo xī"));
  results.push(getOptionAutoComplete(263, "263 宜蘭縣 壯圍 (Zhuàng wéi, Yilan County)", "263 宜蘭縣  壯圍 Yilan County Zhuàng wéi"));
  results.push(getOptionAutoComplete(264, "264 宜蘭縣 員山 (Yuán shān, Yilan County)", "264 宜蘭縣  員山 Yilan County Yuán shān"));
  results.push(getOptionAutoComplete(265, "265 宜蘭縣 羅東 (Luó dōng, Yilan County)", "265 宜蘭縣  羅東 Yilan County Luó dōng"));
  results.push(getOptionAutoComplete(266, "266 宜蘭縣 三星 (Sānxīng, Yilan County)", "266 宜蘭縣  三星 Yilan County Sānxīng"));
  results.push(getOptionAutoComplete(267, "267 宜蘭縣 大同 (Dàtóng, Yilan County)", "267 宜蘭縣  大同 Yilan County Dàtóng"));
  results.push(getOptionAutoComplete(268, "268 宜蘭縣 五結 (Wǔ jié, Yilan County)", "268 宜蘭縣  五結 Yilan County Wǔ jié"));
  results.push(getOptionAutoComplete(269, "269 宜蘭縣 冬山 (Dōngshān, Yilan County)", "269 宜蘭縣  冬山 Yilan County Dōngshān"));
  results.push(getOptionAutoComplete(270, "270 宜蘭縣 蘇澳 (Sū ào, Yilan County)", "270 宜蘭縣  蘇澳 Yilan County Sū ào"));
  results.push(getOptionAutoComplete(272, "272 宜蘭縣 南澳 (Nán'ào, Yilan County)", "272 宜蘭縣  南澳 Yilan County Nán'ào"));
  results.push(getOptionAutoComplete(290, "290 宜蘭縣 釣魚台列嶼 (Diàoyútái liè yǔ, Yilan County)", "290 宜蘭縣  釣魚台列嶼 Yilan County Diàoyútái liè yǔ"));
  results.push(getOptionAutoComplete(300, "300 新竹市  (, Hsinchu)", "300 新竹市   Hsinchu "));
  results.push(getOptionAutoComplete(300, "300 新竹縣 新竹縣 (Xīnzhú xiàn, Hsinchu County)", "300 新竹縣  新竹縣 Hsinchu County Xīnzhú xiàn"));
  results.push(getOptionAutoComplete(302, "302 新竹縣 竹北 (Zhú běi, Hsinchu County)", "302 新竹縣  竹北 Hsinchu County Zhú běi"));
  results.push(getOptionAutoComplete(303, "303 新竹縣 湖口 (Hú kǒu, Hsinchu County)", "303 新竹縣  湖口 Hsinchu County Hú kǒu"));
  results.push(getOptionAutoComplete(304, "304 新竹縣 新豐 (Xīn fēng, Hsinchu County)", "304 新竹縣  新豐 Hsinchu County Xīn fēng"));
  results.push(getOptionAutoComplete(305, "305 新竹縣 新埔 (Xīn bù, Hsinchu County)", "305 新竹縣  新埔 Hsinchu County Xīn bù"));
  results.push(getOptionAutoComplete(306, "306 新竹縣 關西 (Guānxi, Hsinchu County)", "306 新竹縣  關西 Hsinchu County Guānxi"));
  results.push(getOptionAutoComplete(307, "307 新竹縣 芎林 (Qiōng lín, Hsinchu County)", "307 新竹縣  芎林 Hsinchu County Qiōng lín"));
  results.push(getOptionAutoComplete(308, "308 新竹縣 寶山 (Bǎoshān, Hsinchu County)", "308 新竹縣  寶山 Hsinchu County Bǎoshān"));
  results.push(getOptionAutoComplete(310, "310 新竹縣 竹東 (Zhú dōng, Hsinchu County)", "310 新竹縣  竹東 Hsinchu County Zhú dōng"));
  results.push(getOptionAutoComplete(311, "311 新竹縣 五峰 (Wǔfēng, Hsinchu County)", "311 新竹縣  五峰 Hsinchu County Wǔfēng"));
  results.push(getOptionAutoComplete(312, "312 新竹縣 橫山 (Héng shān, Hsinchu County)", "312 新竹縣  橫山 Hsinchu County Héng shān"));
  results.push(getOptionAutoComplete(313, "313 新竹縣 尖石 (Jiān shí, Hsinchu County)", "313 新竹縣  尖石 Hsinchu County Jiān shí"));
  results.push(getOptionAutoComplete(314, "314 新竹縣 北埔 (Běi bù, Hsinchu County)", "314 新竹縣  北埔 Hsinchu County Běi bù"));
  results.push(getOptionAutoComplete(315, "315 新竹縣 峨眉 (Éméi, Hsinchu County)", "315 新竹縣  峨眉 Hsinchu County Éméi"));
  results.push(getOptionAutoComplete(320, "320 桃園縣 中壢 (Zhōng lì, Taoyuan County)", "320 桃園縣  中壢 Taoyuan County Zhōng lì"));
  results.push(getOptionAutoComplete(324, "324 桃園縣 平鎮 (Píng zhèn, Taoyuan County)", "324 桃園縣  平鎮 Taoyuan County Píng zhèn"));
  results.push(getOptionAutoComplete(325, "325 桃園縣 龍潭 (Lóngtán, Taoyuan County)", "325 桃園縣  龍潭 Taoyuan County Lóngtán"));
  results.push(getOptionAutoComplete(326, "326 桃園縣 楊梅 (Yángméi, Taoyuan County)", "326 桃園縣  楊梅 Taoyuan County Yángméi"));
  results.push(getOptionAutoComplete(327, "327 桃園縣 新屋 (Xīnwū, Taoyuan County)", "327 桃園縣  新屋 Taoyuan County Xīnwū"));
  results.push(getOptionAutoComplete(328, "328 桃園縣 觀音 (Guānyīn, Taoyuan County)", "328 桃園縣  觀音 Taoyuan County Guānyīn"));
  results.push(getOptionAutoComplete(330, "330 桃園縣 桃園 (Táoyuán, Taoyuan County)", "330 桃園縣  桃園 Taoyuan County Táoyuán"));
  results.push(getOptionAutoComplete(333, "333 桃園縣 龜山 (Guī shān, Taoyuan County)", "333 桃園縣  龜山 Taoyuan County Guī shān"));
  results.push(getOptionAutoComplete(334, "334 桃園縣 八德 (Bā dé, Taoyuan County)", "334 桃園縣  八德 Taoyuan County Bā dé"));
  results.push(getOptionAutoComplete(335, "335 桃園縣 大溪 (Dà xī, Taoyuan County)", "335 桃園縣  大溪 Taoyuan County Dà xī"));
  results.push(getOptionAutoComplete(336, "336 桃園縣 復興 (Fùxīng, Taoyuan County)", "336 桃園縣  復興 Taoyuan County Fùxīng"));
  results.push(getOptionAutoComplete(337, "337 桃園縣 大園 (Dàyuán, Taoyuan County)", "337 桃園縣  大園 Taoyuan County Dàyuán"));
  results.push(getOptionAutoComplete(338, "338 桃園縣 蘆竹 (Lú zhú, Taoyuan County)", "338 桃園縣  蘆竹 Taoyuan County Lú zhú"));
  results.push(getOptionAutoComplete(350, "350 苗栗縣 竹南 (Zhú nán, Miaoli County)", "350 苗栗縣  竹南 Miaoli County Zhú nán"));
  results.push(getOptionAutoComplete(351, "351 苗栗縣 頭份 (Tóu fèn, Miaoli County)", "351 苗栗縣  頭份 Miaoli County Tóu fèn"));
  results.push(getOptionAutoComplete(352, "352 苗栗縣 三灣 (Sān wān, Miaoli County)", "352 苗栗縣  三灣 Miaoli County Sān wān"));
  results.push(getOptionAutoComplete(353, "353 苗栗縣 南庄 (Nán zhuāng, Miaoli County)", "353 苗栗縣  南庄 Miaoli County Nán zhuāng"));
  results.push(getOptionAutoComplete(354, "354 苗栗縣 獅潭 (Shī tán, Miaoli County)", "354 苗栗縣  獅潭 Miaoli County Shī tán"));
  results.push(getOptionAutoComplete(356, "356 苗栗縣 後龍 (Hòu lóng, Miaoli County)", "356 苗栗縣  後龍 Miaoli County Hòu lóng"));
  results.push(getOptionAutoComplete(357, "357 苗栗縣 通霄 (Tōng xiāo, Miaoli County)", "357 苗栗縣  通霄 Miaoli County Tōng xiāo"));
  results.push(getOptionAutoComplete(358, "358 苗栗縣 苑裡 (Yuàn li, Miaoli County)", "358 苗栗縣  苑裡 Miaoli County Yuàn li"));
  results.push(getOptionAutoComplete(360, "360 苗栗縣 苗栗 (Miáolì, Miaoli County)", "360 苗栗縣  苗栗 Miaoli County Miáolì"));
  results.push(getOptionAutoComplete(361, "361 苗栗縣 造橋 (Zào qiáo, Miaoli County)", "361 苗栗縣  造橋 Miaoli County Zào qiáo"));
  results.push(getOptionAutoComplete(362, "362 苗栗縣 頭屋 (Tóu wū, Miaoli County)", "362 苗栗縣  頭屋 Miaoli County Tóu wū"));
  results.push(getOptionAutoComplete(363, "363 苗栗縣 公館 (Gōngguǎn, Miaoli County)", "363 苗栗縣  公館 Miaoli County Gōngguǎn"));
  results.push(getOptionAutoComplete(364, "364 苗栗縣 大湖 (Dàhú, Miaoli County)", "364 苗栗縣  大湖 Miaoli County Dàhú"));
  results.push(getOptionAutoComplete(365, "365 苗栗縣 泰安 (Tài'ān, Miaoli County)", "365 苗栗縣  泰安 Miaoli County Tài'ān"));
  results.push(getOptionAutoComplete(366, "366 苗栗縣 銅鑼 (Tóngluó, Miaoli County)", "366 苗栗縣  銅鑼 Miaoli County Tóngluó"));
  results.push(getOptionAutoComplete(367, "367 苗栗縣 三義 (Sānyì, Miaoli County)", "367 苗栗縣  三義 Miaoli County Sānyì"));
  results.push(getOptionAutoComplete(368, "368 苗栗縣 西湖 (Xīhú, Miaoli County)", "368 苗栗縣  西湖 Miaoli County Xīhú"));
  results.push(getOptionAutoComplete(369, "369 苗栗縣 卓蘭 (Zhuō lán, Miaoli County)", "369 苗栗縣  卓蘭 Miaoli County Zhuō lán"));
  results.push(getOptionAutoComplete(400, "400 臺中市 中區 (Zhōng qū, Taichung City)", "400 臺中市 台中市 中區 Taichung City Zhōng qū"));
  results.push(getOptionAutoComplete(401, "401 臺中市 東區 (Dōngqū, Taichung City)", "401 臺中市 台中市 東區 Taichung City Dōngqū"));
  results.push(getOptionAutoComplete(402, "402 臺中市 南區 (Nán qū, Taichung City)", "402 臺中市 台中市 南區 Taichung City Nán qū"));
  results.push(getOptionAutoComplete(403, "403 臺中市 西區 (Xiqū, Taichung City)", "403 臺中市 台中市 西區 Taichung City Xiqū"));
  results.push(getOptionAutoComplete(404, "404 臺中市 北區 (Běi qū, Taichung City)", "404 臺中市 台中市 北區 Taichung City Běi qū"));
  results.push(getOptionAutoComplete(406, "406 臺中市 北屯區 (Běi tún qū, Taichung City)", "406 臺中市 台中市 北屯區 Taichung City Běi tún qū"));
  results.push(getOptionAutoComplete(407, "407 臺中市 西屯區 (Xi tún qū, Taichung City)", "407 臺中市 台中市 西屯區 Taichung City Xi tún qū"));
  results.push(getOptionAutoComplete(408, "408 臺中市 南屯區 (Nán tún qū, Taichung City)", "408 臺中市 台中市 南屯區 Taichung City Nán tún qū"));
  results.push(getOptionAutoComplete(411, "411 臺中市 太平區 (Tàipíng qū, Taichung City)", "411 臺中市 台中市 太平區 Taichung City Tàipíng qū"));
  results.push(getOptionAutoComplete(412, "412 臺中市 大里區 (Dàlǐ qū, Taichung City)", "412 臺中市 台中市 大里區 Taichung City Dàlǐ qū"));
  results.push(getOptionAutoComplete(413, "413 臺中市 霧峰區 (Wù fēng qū, Taichung City)", "413 臺中市 台中市 霧峰區 Taichung City Wù fēng qū"));
  results.push(getOptionAutoComplete(414, "414 臺中市 烏日區 (Wū rì qū, Taichung City)", "414 臺中市 台中市 烏日區 Taichung City Wū rì qū"));
  results.push(getOptionAutoComplete(420, "420 臺中市 豐原區 (Fēngyuán qū, Taichung City)", "420 臺中市 台中市 豐原區 Taichung City Fēngyuán qū"));
  results.push(getOptionAutoComplete(421, "421 臺中市 后里區 (Hòu li qū, Taichung City)", "421 臺中市 台中市 后里區 Taichung City Hòu li qū"));
  results.push(getOptionAutoComplete(422, "422 臺中市 石岡區 (Shígāng qū, Taichung City)", "422 臺中市 台中市 石岡區 Taichung City Shígāng qū"));
  results.push(getOptionAutoComplete(423, "423 臺中市 東勢區 (Dōngshì qū, Taichung City)", "423 臺中市 台中市 東勢區 Taichung City Dōngshì qū"));
  results.push(getOptionAutoComplete(424, "424 臺中市 和平區 (Hépíng qū, Taichung City)", "424 臺中市 台中市 和平區 Taichung City Hépíng qū"));
  results.push(getOptionAutoComplete(426, "426 臺中市 新社區 (Xīn shèqū, Taichung City)", "426 臺中市 台中市 新社區 Taichung City Xīn shèqū"));
  results.push(getOptionAutoComplete(427, "427 臺中市 潭子區 (Tán zi qū, Taichung City)", "427 臺中市 台中市 潭子區 Taichung City Tán zi qū"));
  results.push(getOptionAutoComplete(428, "428 臺中市 大雅區 (Dàyǎ qū, Taichung City)", "428 臺中市 台中市 大雅區 Taichung City Dàyǎ qū"));
  results.push(getOptionAutoComplete(429, "429 臺中市 神岡區 (Shéngāng qū, Taichung City)", "429 臺中市 台中市 神岡區 Taichung City Shéngāng qū"));
  results.push(getOptionAutoComplete(432, "432 臺中市 大肚區 (Dà dù qū, Taichung City)", "432 臺中市 台中市 大肚區 Taichung City Dà dù qū"));
  results.push(getOptionAutoComplete(433, "433 臺中市 沙鹿區 (Shā lù qū, Taichung City)", "433 臺中市 台中市 沙鹿區 Taichung City Shā lù qū"));
  results.push(getOptionAutoComplete(434, "434 臺中市 龍井區 (Lóngjǐng qū, Taichung City)", "434 臺中市 台中市 龍井區 Taichung City Lóngjǐng qū"));
  results.push(getOptionAutoComplete(435, "435 臺中市 梧棲區 (Wú qī qū, Taichung City)", "435 臺中市 台中市 梧棲區 Taichung City Wú qī qū"));
  results.push(getOptionAutoComplete(436, "436 臺中市 清水區 (Qīngshuǐ qū, Taichung City)", "436 臺中市 台中市 清水區 Taichung City Qīngshuǐ qū"));
  results.push(getOptionAutoComplete(437, "437 臺中市 大甲區 (Dà jiǎ qū, Taichung City)", "437 臺中市 台中市 大甲區 Taichung City Dà jiǎ qū"));
  results.push(getOptionAutoComplete(438, "438 臺中市 外埔區 (Wài bù qū, Taichung City)", "438 臺中市 台中市 外埔區 Taichung City Wài bù qū"));
  results.push(getOptionAutoComplete(439, "439 臺中市 大安區 (Dà'ān qū, Taichung City)", "439 臺中市 台中市 大安區 Taichung City Dà'ān qū"));
  results.push(getOptionAutoComplete(500, "500 彰化縣 彰化 (Zhānghuà, Changhua County)", "500 彰化縣  彰化 Changhua County Zhānghuà"));
  results.push(getOptionAutoComplete(502, "502 彰化縣 芬園 (Fēn yuán, Changhua County)", "502 彰化縣  芬園 Changhua County Fēn yuán"));
  results.push(getOptionAutoComplete(503, "503 彰化縣 花壇 (Huātán, Changhua County)", "503 彰化縣  花壇 Changhua County Huātán"));
  results.push(getOptionAutoComplete(504, "504 彰化縣 秀水 (Xiùshuǐ, Changhua County)", "504 彰化縣  秀水 Changhua County Xiùshuǐ"));
  results.push(getOptionAutoComplete(505, "505 彰化縣 鹿港 (Lù gǎng, Changhua County)", "505 彰化縣  鹿港 Changhua County Lù gǎng"));
  results.push(getOptionAutoComplete(506, "506 彰化縣 福興 (Fú xìng, Changhua County)", "506 彰化縣  福興 Changhua County Fú xìng"));
  results.push(getOptionAutoComplete(507, "507 彰化縣 線西 (Xiàn xi, Changhua County)", "507 彰化縣  線西 Changhua County Xiàn xi"));
  results.push(getOptionAutoComplete(508, "508 彰化縣 和美 (Héměi, Changhua County)", "508 彰化縣  和美 Changhua County Héměi"));
  results.push(getOptionAutoComplete(509, "509 彰化縣 伸港 (Shēn gǎng, Changhua County)", "509 彰化縣  伸港 Changhua County Shēn gǎng"));
  results.push(getOptionAutoComplete(510, "510 彰化縣 員林 (Yuán lín, Changhua County)", "510 彰化縣  員林 Changhua County Yuán lín"));
  results.push(getOptionAutoComplete(511, "511 彰化縣 社頭 (Shètóu, Changhua County)", "511 彰化縣  社頭 Changhua County Shètóu"));
  results.push(getOptionAutoComplete(512, "512 彰化縣 永靖 (Yǒng jìng, Changhua County)", "512 彰化縣  永靖 Changhua County Yǒng jìng"));
  results.push(getOptionAutoComplete(513, "513 彰化縣 埔心 (Bù xīn, Changhua County)", "513 彰化縣  埔心 Changhua County Bù xīn"));
  results.push(getOptionAutoComplete(514, "514 彰化縣 溪湖 (Xī hú, Changhua County)", "514 彰化縣  溪湖 Changhua County Xī hú"));
  results.push(getOptionAutoComplete(515, "515 彰化縣 大村 (Dàcūn, Changhua County)", "515 彰化縣  大村 Changhua County Dàcūn"));
  results.push(getOptionAutoComplete(516, "516 彰化縣 埔鹽 (Bù yán, Changhua County)", "516 彰化縣  埔鹽 Changhua County Bù yán"));
  results.push(getOptionAutoComplete(520, "520 彰化縣 田中 (Tiánzhōng, Changhua County)", "520 彰化縣  田中 Changhua County Tiánzhōng"));
  results.push(getOptionAutoComplete(521, "521 彰化縣 北斗 (Běidǒu, Changhua County)", "521 彰化縣  北斗 Changhua County Běidǒu"));
  results.push(getOptionAutoComplete(522, "522 彰化縣 田尾 (Tiánwěi, Changhua County)", "522 彰化縣  田尾 Changhua County Tiánwěi"));
  results.push(getOptionAutoComplete(523, "523 彰化縣 埤頭 (Pí tóu, Changhua County)", "523 彰化縣  埤頭 Changhua County Pí tóu"));
  results.push(getOptionAutoComplete(524, "524 彰化縣 溪州 (Xī zhōu, Changhua County)", "524 彰化縣  溪州 Changhua County Xī zhōu"));
  results.push(getOptionAutoComplete(525, "525 彰化縣 竹塘 (Zhú táng, Changhua County)", "525 彰化縣  竹塘 Changhua County Zhú táng"));
  results.push(getOptionAutoComplete(526, "526 彰化縣 二林 (Èr lín, Changhua County)", "526 彰化縣  二林 Changhua County Èr lín"));
  results.push(getOptionAutoComplete(527, "527 彰化縣 大城 (Dàchéng, Changhua County)", "527 彰化縣  大城 Changhua County Dàchéng"));
  results.push(getOptionAutoComplete(528, "528 彰化縣 芳苑 (Fāng yuàn, Changhua County)", "528 彰化縣  芳苑 Changhua County Fāng yuàn"));
  results.push(getOptionAutoComplete(530, "530 彰化縣 二水 (Èr shuǐ, Changhua County)", "530 彰化縣  二水 Changhua County Èr shuǐ"));
  results.push(getOptionAutoComplete(540, "540 南投縣 南投 (Nántóu, Nantou County)", "540 南投縣  南投 Nantou County Nántóu"));
  results.push(getOptionAutoComplete(541, "541 南投縣 中寮 (Zhōng liáo, Nantou County)", "541 南投縣  中寮 Nantou County Zhōng liáo"));
  results.push(getOptionAutoComplete(542, "542 南投縣 草屯 (Cǎo tún, Nantou County)", "542 南投縣  草屯 Nantou County Cǎo tún"));
  results.push(getOptionAutoComplete(544, "544 南投縣 國姓 (Guó xìng, Nantou County)", "544 南投縣  國姓 Nantou County Guó xìng"));
  results.push(getOptionAutoComplete(545, "545 南投縣 埔里 (Bùlǐ, Nantou County)", "545 南投縣  埔里 Nantou County Bùlǐ"));
  results.push(getOptionAutoComplete(546, "546 南投縣 仁愛 (Rén'ài, Nantou County)", "546 南投縣  仁愛 Nantou County Rén'ài"));
  results.push(getOptionAutoComplete(551, "551 南投縣 名間 (Míng jiān, Nantou County)", "551 南投縣  名間 Nantou County Míng jiān"));
  results.push(getOptionAutoComplete(552, "552 南投縣 集集 (Jí jí, Nantou County)", "552 南投縣  集集 Nantou County Jí jí"));
  results.push(getOptionAutoComplete(553, "553 南投縣 水里 (Shuǐ lǐ, Nantou County)", "553 南投縣  水里 Nantou County Shuǐ lǐ"));
  results.push(getOptionAutoComplete(555, "555 南投縣 魚池 (Yúchí, Nantou County)", "555 南投縣  魚池 Nantou County Yúchí"));
  results.push(getOptionAutoComplete(556, "556 南投縣 信義 (Xìnyì, Nantou County)", "556 南投縣  信義 Nantou County Xìnyì"));
  results.push(getOptionAutoComplete(557, "557 南投縣 竹山 (Zhúshān, Nantou County)", "557 南投縣  竹山 Nantou County Zhúshān"));
  results.push(getOptionAutoComplete(558, "558 南投縣 鹿谷 (Lùgǔ, Nantou County)", "558 南投縣  鹿谷 Nantou County Lùgǔ"));
  results.push(getOptionAutoComplete(600, "600 嘉義市 嘉義市 (Jiāyì shì, Chiayi City)", "600 嘉義市  嘉義市 Chiayi City Jiāyì shì"));
  results.push(getOptionAutoComplete(602, "602 嘉義縣 番路 (Fān lù, Chiayi County)", "602 嘉義縣  番路 Chiayi County Fān lù"));
  results.push(getOptionAutoComplete(603, "603 嘉義縣 梅山 (Méishān, Chiayi County)", "603 嘉義縣  梅山 Chiayi County Méishān"));
  results.push(getOptionAutoComplete(604, "604 嘉義縣 竹崎 (Zhúqí, Chiayi County)", "604 嘉義縣  竹崎 Chiayi County Zhúqí"));
  results.push(getOptionAutoComplete(605, "605 嘉義縣 阿里山 (Ālǐ shān, Chiayi County)", "605 嘉義縣  阿里山 Chiayi County Ālǐ shān"));
  results.push(getOptionAutoComplete(606, "606 嘉義縣 中埔 (Zhōng bù, Chiayi County)", "606 嘉義縣  中埔 Chiayi County Zhōng bù"));
  results.push(getOptionAutoComplete(607, "607 嘉義縣 大埔 (Dà bù, Chiayi County)", "607 嘉義縣  大埔 Chiayi County Dà bù"));
  results.push(getOptionAutoComplete(608, "608 嘉義縣 水上 (Shuǐshàng, Chiayi County)", "608 嘉義縣  水上 Chiayi County Shuǐshàng"));
  results.push(getOptionAutoComplete(611, "611 嘉義縣 鹿草 (Lù cǎo, Chiayi County)", "611 嘉義縣  鹿草 Chiayi County Lù cǎo"));
  results.push(getOptionAutoComplete(612, "612 嘉義縣 太保 (Tàibǎo, Chiayi County)", "612 嘉義縣  太保 Chiayi County Tàibǎo"));
  results.push(getOptionAutoComplete(613, "613 嘉義縣 朴子 (Pǔ zi, Chiayi County)", "613 嘉義縣  朴子 Chiayi County Pǔ zi"));
  results.push(getOptionAutoComplete(614, "614 嘉義縣 東石 (Dōngshí, Chiayi County)", "614 嘉義縣  東石 Chiayi County Dōngshí"));
  results.push(getOptionAutoComplete(615, "615 嘉義縣 六腳 (Liù jiǎo, Chiayi County)", "615 嘉義縣  六腳 Chiayi County Liù jiǎo"));
  results.push(getOptionAutoComplete(616, "616 嘉義縣 新港 (Xīngǎng, Chiayi County)", "616 嘉義縣  新港 Chiayi County Xīngǎng"));
  results.push(getOptionAutoComplete(621, "621 嘉義縣 民雄 (Mínxióng, Chiayi County)", "621 嘉義縣  民雄 Chiayi County Mínxióng"));
  results.push(getOptionAutoComplete(622, "622 嘉義縣 大林 (Dàlín, Chiayi County)", "622 嘉義縣  大林 Chiayi County Dàlín"));
  results.push(getOptionAutoComplete(623, "623 嘉義縣 溪口 (Xī kǒu, Chiayi County)", "623 嘉義縣  溪口 Chiayi County Xī kǒu"));
  results.push(getOptionAutoComplete(624, "624 嘉義縣 義竹 (Yì zhú, Chiayi County)", "624 嘉義縣  義竹 Chiayi County Yì zhú"));
  results.push(getOptionAutoComplete(625, "625 嘉義縣 布袋 (Bùdài, Chiayi County)", "625 嘉義縣  布袋 Chiayi County Bùdài"));
  results.push(getOptionAutoComplete(630, "630 雲林縣 斗南 (Dòu nán, Yunlin County)", "630 雲林縣  斗南 Yunlin County Dòu nán"));
  results.push(getOptionAutoComplete(631, "631 雲林縣 大埤 (Dà pí, Yunlin County)", "631 雲林縣  大埤 Yunlin County Dà pí"));
  results.push(getOptionAutoComplete(632, "632 雲林縣 虎尾 (Hǔwěi, Yunlin County)", "632 雲林縣  虎尾 Yunlin County Hǔwěi"));
  results.push(getOptionAutoComplete(633, "633 雲林縣 土庫 (Tǔ kù, Yunlin County)", "633 雲林縣  土庫 Yunlin County Tǔ kù"));
  results.push(getOptionAutoComplete(634, "634 雲林縣 褒忠 (Bāo zhōng, Yunlin County)", "634 雲林縣  褒忠 Yunlin County Bāo zhōng"));
  results.push(getOptionAutoComplete(635, "635 雲林縣 東勢 (Dōngshì, Yunlin County)", "635 雲林縣  東勢 Yunlin County Dōngshì"));
  results.push(getOptionAutoComplete(636, "636 雲林縣 臺西 (Tái xi, Yunlin County)", "636 雲林縣  臺西 Yunlin County Tái xi"));
  results.push(getOptionAutoComplete(637, "637 雲林縣 崙背 (Lún bèi, Yunlin County)", "637 雲林縣  崙背 Yunlin County Lún bèi"));
  results.push(getOptionAutoComplete(638, "638 雲林縣 麥寮 (Mài liáo, Yunlin County)", "638 雲林縣  麥寮 Yunlin County Mài liáo"));
  results.push(getOptionAutoComplete(640, "640 雲林縣 斗六 (Dòu liù, Yunlin County)", "640 雲林縣  斗六 Yunlin County Dòu liù"));
  results.push(getOptionAutoComplete(643, "643 雲林縣 林內 (Lín nèi, Yunlin County)", "643 雲林縣  林內 Yunlin County Lín nèi"));
  results.push(getOptionAutoComplete(646, "646 雲林縣 古坑 (Gǔ kēng, Yunlin County)", "646 雲林縣  古坑 Yunlin County Gǔ kēng"));
  results.push(getOptionAutoComplete(647, "647 雲林縣 莿桐 (Cì tóng, Yunlin County)", "647 雲林縣  莿桐 Yunlin County Cì tóng"));
  results.push(getOptionAutoComplete(648, "648 雲林縣 西螺 (Xi luó, Yunlin County)", "648 雲林縣  西螺 Yunlin County Xi luó"));
  results.push(getOptionAutoComplete(649, "649 雲林縣 二崙 (Èr lún, Yunlin County)", "649 雲林縣  二崙 Yunlin County Èr lún"));
  results.push(getOptionAutoComplete(651, "651 雲林縣 北港 (Běigǎng, Yunlin County)", "651 雲林縣  北港 Yunlin County Běigǎng"));
  results.push(getOptionAutoComplete(652, "652 雲林縣 水林 (Shuǐ lín, Yunlin County)", "652 雲林縣  水林 Yunlin County Shuǐ lín"));
  results.push(getOptionAutoComplete(653, "653 雲林縣 口湖 (Kǒu hú, Yunlin County)", "653 雲林縣  口湖 Yunlin County Kǒu hú"));
  results.push(getOptionAutoComplete(654, "654 雲林縣 四湖 (Sì hú, Yunlin County)", "654 雲林縣  四湖 Yunlin County Sì hú"));
  results.push(getOptionAutoComplete(655, "655 雲林縣 元長 (Yuán zhǎng, Yunlin County)", "655 雲林縣  元長 Yunlin County Yuán zhǎng"));
  results.push(getOptionAutoComplete(700, "700 臺南市 中西區 (Zhōng xī qū, Tainan City)", "700 臺南市 台南市 中西區 Tainan City Zhōng xī qū"));
  results.push(getOptionAutoComplete(701, "701 臺南市 東區 (Dōngqū, Tainan City)", "701 臺南市 台南市 東區 Tainan City Dōngqū"));
  results.push(getOptionAutoComplete(702, "702 臺南市 南區 (Nán qū, Tainan City)", "702 臺南市 台南市 南區 Tainan City Nán qū"));
  results.push(getOptionAutoComplete(704, "704 臺南市 北區 (Běi qū, Tainan City)", "704 臺南市 台南市 北區 Tainan City Běi qū"));
  results.push(getOptionAutoComplete(708, "708 臺南市 安平區 (Ānpíng qū, Tainan City)", "708 臺南市 台南市 安平區 Tainan City Ānpíng qū"));
  results.push(getOptionAutoComplete(709, "709 臺南市 安南區 (Ānnán qū, Tainan City)", "709 臺南市 台南市 安南區 Tainan City Ānnán qū"));
  results.push(getOptionAutoComplete(710, "710 臺南市 永康區 (Yǒngkāng qū, Tainan City)", "710 臺南市 台南市 永康區 Tainan City Yǒngkāng qū"));
  results.push(getOptionAutoComplete(711, "711 臺南市 歸仁區 (Guī rén qū, Tainan City)", "711 臺南市 台南市 歸仁區 Tainan City Guī rén qū"));
  results.push(getOptionAutoComplete(712, "712 臺南市 新化區 (Xīn huà qū, Tainan City)", "712 臺南市 台南市 新化區 Tainan City Xīn huà qū"));
  results.push(getOptionAutoComplete(713, "713 臺南市 左鎮區 (Zuǒ zhèn qū, Tainan City)", "713 臺南市 台南市 左鎮區 Tainan City Zuǒ zhèn qū"));
  results.push(getOptionAutoComplete(714, "714 臺南市 玉井區 (Yùjǐng qū, Tainan City)", "714 臺南市 台南市 玉井區 Tainan City Yùjǐng qū"));
  results.push(getOptionAutoComplete(715, "715 臺南市 楠西區 (Nán xiqū, Tainan City)", "715 臺南市 台南市 楠西區 Tainan City Nán xiqū"));
  results.push(getOptionAutoComplete(716, "716 臺南市 南化區 (Nán huà qū, Tainan City)", "716 臺南市 台南市 南化區 Tainan City Nán huà qū"));
  results.push(getOptionAutoComplete(717, "717 臺南市 仁德區 (Rén dé qū, Tainan City)", "717 臺南市 台南市 仁德區 Tainan City Rén dé qū"));
  results.push(getOptionAutoComplete(718, "718 臺南市 關廟區 (Guān miào qū, Tainan City)", "718 臺南市 台南市 關廟區 Tainan City Guān miào qū"));
  results.push(getOptionAutoComplete(719, "719 臺南市 龍崎區 (Lóngqí qū, Tainan City)", "719 臺南市 台南市 龍崎區 Tainan City Lóngqí qū"));
  results.push(getOptionAutoComplete(720, "720 臺南市 官田區 (Guān tián qū, Tainan City)", "720 臺南市 台南市 官田區 Tainan City Guān tián qū"));
  results.push(getOptionAutoComplete(721, "721 臺南市 麻豆區 (Má dòu qū, Tainan City)", "721 臺南市 台南市 麻豆區 Tainan City Má dòu qū"));
  results.push(getOptionAutoComplete(722, "722 臺南市 佳里區 (Jiā li qū, Tainan City)", "722 臺南市 台南市 佳里區 Tainan City Jiā li qū"));
  results.push(getOptionAutoComplete(723, "723 臺南市 西港區 (Xigǎng qū, Tainan City)", "723 臺南市 台南市 西港區 Tainan City Xigǎng qū"));
  results.push(getOptionAutoComplete(724, "724 臺南市 七股區 (Qī gǔ qū, Tainan City)", "724 臺南市 台南市 七股區 Tainan City Qī gǔ qū"));
  results.push(getOptionAutoComplete(725, "725 臺南市 將軍區 (Jiāngjūn qū, Tainan City)", "725 臺南市 台南市 將軍區 Tainan City Jiāngjūn qū"));
  results.push(getOptionAutoComplete(726, "726 臺南市 學甲區 (Xué jiǎ qū, Tainan City)", "726 臺南市 台南市 學甲區 Tainan City Xué jiǎ qū"));
  results.push(getOptionAutoComplete(727, "727 臺南市 北門區 (Běimén qū, Tainan City)", "727 臺南市 台南市 北門區 Tainan City Běimén qū"));
  results.push(getOptionAutoComplete(730, "730 臺南市 新營區 (Xīn yíngqū, Tainan City)", "730 臺南市 台南市 新營區 Tainan City Xīn yíngqū"));
  results.push(getOptionAutoComplete(731, "731 臺南市 後壁區 (Hòu bì qū, Tainan City)", "731 臺南市 台南市 後壁區 Tainan City Hòu bì qū"));
  results.push(getOptionAutoComplete(732, "732 臺南市 白河區 (Báihé qū, Tainan City)", "732 臺南市 台南市 白河區 Tainan City Báihé qū"));
  results.push(getOptionAutoComplete(733, "733 臺南市 東山區 (Dōngshān qū, Tainan City)", "733 臺南市 台南市 東山區 Tainan City Dōngshān qū"));
  results.push(getOptionAutoComplete(734, "734 臺南市 六甲區 (Liùjiǎ qū, Tainan City)", "734 臺南市 台南市 六甲區 Tainan City Liùjiǎ qū"));
  results.push(getOptionAutoComplete(735, "735 臺南市 下營區 (Xià yíngqū, Tainan City)", "735 臺南市 台南市 下營區 Tainan City Xià yíngqū"));
  results.push(getOptionAutoComplete(736, "736 臺南市 柳營區 (Liǔ yíngqū, Tainan City)", "736 臺南市 台南市 柳營區 Tainan City Liǔ yíngqū"));
  results.push(getOptionAutoComplete(737, "737 臺南市 鹽水區 (Yánshuǐ qū, Tainan City)", "737 臺南市 台南市 鹽水區 Tainan City Yánshuǐ qū"));
  results.push(getOptionAutoComplete(741, "741 臺南市 善化區 (Shàn huà qū, Tainan City)", "741 臺南市 台南市 善化區 Tainan City Shàn huà qū"));
  results.push(getOptionAutoComplete(742, "742 臺南市 大內區 (Dà nèi qū, Tainan City)", "742 臺南市 台南市 大內區 Tainan City Dà nèi qū"));
  results.push(getOptionAutoComplete(743, "743 臺南市 山上區 (Shānshàng qū, Tainan City)", "743 臺南市 台南市 山上區 Tainan City Shānshàng qū"));
  results.push(getOptionAutoComplete(744, "744 臺南市 新市區 (Xīn shì qū, Tainan City)", "744 臺南市 台南市 新市區 Tainan City Xīn shì qū"));
  results.push(getOptionAutoComplete(745, "745 臺南市 安定區 (Āndìng qū, Tainan City)", "745 臺南市 台南市 安定區 Tainan City Āndìng qū"));
  results.push(getOptionAutoComplete(800, "800 高雄市 新興區 (Xīnxīng qū, Kaohsiung)", "800 高雄市  新興區 Kaohsiung Xīnxīng qū"));
  results.push(getOptionAutoComplete(801, "801 高雄市 前金區 (Qián jīn qū, Kaohsiung)", "801 高雄市  前金區 Kaohsiung Qián jīn qū"));
  results.push(getOptionAutoComplete(802, "802 高雄市 苓雅區 (Líng yǎ qū, Kaohsiung)", "802 高雄市  苓雅區 Kaohsiung Líng yǎ qū"));
  results.push(getOptionAutoComplete(803, "803 高雄市 鹽埕區 (Yán chéng qū, Kaohsiung)", "803 高雄市  鹽埕區 Kaohsiung Yán chéng qū"));
  results.push(getOptionAutoComplete(804, "804 高雄市 鼓山區 (Gǔshān qū, Kaohsiung)", "804 高雄市  鼓山區 Kaohsiung Gǔshān qū"));
  results.push(getOptionAutoComplete(805, "805 高雄市 旗津區 (Qí jīn qū, Kaohsiung)", "805 高雄市  旗津區 Kaohsiung Qí jīn qū"));
  results.push(getOptionAutoComplete(806, "806 高雄市 前鎮區 (Qián zhèn qū, Kaohsiung)", "806 高雄市  前鎮區 Kaohsiung Qián zhèn qū"));
  results.push(getOptionAutoComplete(807, "807 高雄市 三民區 (Sānmín qū, Kaohsiung)", "807 高雄市  三民區 Kaohsiung Sānmín qū"));
  results.push(getOptionAutoComplete(811, "811 高雄市 楠梓區 (Nán zǐ qū, Kaohsiung)", "811 高雄市  楠梓區 Kaohsiung Nán zǐ qū"));
  results.push(getOptionAutoComplete(812, "812 高雄市 小港區 (Xiǎogǎng qū, Kaohsiung)", "812 高雄市  小港區 Kaohsiung Xiǎogǎng qū"));
  results.push(getOptionAutoComplete(813, "813 高雄市 左營區 (Zuǒ yíngqū, Kaohsiung)", "813 高雄市  左營區 Kaohsiung Zuǒ yíngqū"));
  results.push(getOptionAutoComplete(814, "814 高雄市 仁武區 (Rén wǔ qū, Kaohsiung)", "814 高雄市  仁武區 Kaohsiung Rén wǔ qū"));
  results.push(getOptionAutoComplete(815, "815 高雄市 大社區 (Dà shèqū, Kaohsiung)", "815 高雄市  大社區 Kaohsiung Dà shèqū"));
  results.push(getOptionAutoComplete(817, "817 南海諸島 東沙 (Dōngshā, South China Sea Islands)", "817 南海諸島  東沙 South China Sea Islands Dōngshā"));
  results.push(getOptionAutoComplete(819, "819 南海諸島 南沙 (Nánshā, South China Sea Islands)", "819 南海諸島  南沙 South China Sea Islands Nánshā"));
  results.push(getOptionAutoComplete(820, "820 高雄市 岡山區 (Gāngshān qū, Kaohsiung)", "820 高雄市  岡山區 Kaohsiung Gāngshān qū"));
  results.push(getOptionAutoComplete(821, "821 高雄市 路竹區 (Lù zhú qū, Kaohsiung)", "821 高雄市  路竹區 Kaohsiung Lù zhú qū"));
  results.push(getOptionAutoComplete(822, "822 高雄市 阿蓮區 (Ā lián qū, Kaohsiung)", "822 高雄市  阿蓮區 Kaohsiung Ā lián qū"));
  results.push(getOptionAutoComplete(823, "823 高雄市 田寮區 (Tián liáo qū, Kaohsiung)", "823 高雄市  田寮區 Kaohsiung Tián liáo qū"));
  results.push(getOptionAutoComplete(824, "824 高雄市 燕巢區 (Yàn cháo qū, Kaohsiung)", "824 高雄市  燕巢區 Kaohsiung Yàn cháo qū"));
  results.push(getOptionAutoComplete(825, "825 高雄市 橋頭區 (Qiáotóu qū, Kaohsiung)", "825 高雄市  橋頭區 Kaohsiung Qiáotóu qū"));
  results.push(getOptionAutoComplete(826, "826 高雄市 梓官區 (Zǐ guān qū, Kaohsiung)", "826 高雄市  梓官區 Kaohsiung Zǐ guān qū"));
  results.push(getOptionAutoComplete(827, "827 高雄市 彌陀區 (Mítuó qū, Kaohsiung)", "827 高雄市  彌陀區 Kaohsiung Mítuó qū"));
  results.push(getOptionAutoComplete(828, "828 高雄市 永安區 (Yǒng'ān qū, Kaohsiung)", "828 高雄市  永安區 Kaohsiung Yǒng'ān qū"));
  results.push(getOptionAutoComplete(829, "829 高雄市 湖內區 (Hú nèi qū, Kaohsiung)", "829 高雄市  湖內區 Kaohsiung Hú nèi qū"));
  results.push(getOptionAutoComplete(830, "830 高雄市 鳳山區 (Fèng shānqū, Kaohsiung)", "830 高雄市  鳳山區 Kaohsiung Fèng shānqū"));
  results.push(getOptionAutoComplete(831, "831 高雄市 大寮區 (Dà liáo qū, Kaohsiung)", "831 高雄市  大寮區 Kaohsiung Dà liáo qū"));
  results.push(getOptionAutoComplete(832, "832 高雄市 林園區 (Lín yuánqū, Kaohsiung)", "832 高雄市  林園區 Kaohsiung Lín yuánqū"));
  results.push(getOptionAutoComplete(833, "833 高雄市 鳥松區 (Niǎo sōng qū, Kaohsiung)", "833 高雄市  鳥松區 Kaohsiung Niǎo sōng qū"));
  results.push(getOptionAutoComplete(840, "840 高雄市 大樹區 (Dàshù qū, Kaohsiung)", "840 高雄市  大樹區 Kaohsiung Dàshù qū"));
  results.push(getOptionAutoComplete(842, "842 高雄市 旗山區 (Qí shānqū, Kaohsiung)", "842 高雄市  旗山區 Kaohsiung Qí shānqū"));
  results.push(getOptionAutoComplete(843, "843 高雄市 美濃區 (Měinóng qū, Kaohsiung)", "843 高雄市  美濃區 Kaohsiung Měinóng qū"));
  results.push(getOptionAutoComplete(844, "844 高雄市 六龜區 (Liù guī qū, Kaohsiung)", "844 高雄市  六龜區 Kaohsiung Liù guī qū"));
  results.push(getOptionAutoComplete(845, "845 高雄市 內門區 (Nèi mén qū, Kaohsiung)", "845 高雄市  內門區 Kaohsiung Nèi mén qū"));
  results.push(getOptionAutoComplete(846, "846 高雄市 杉林區 (Shānlín qū, Kaohsiung)", "846 高雄市  杉林區 Kaohsiung Shānlín qū"));
  results.push(getOptionAutoComplete(847, "847 高雄市 甲仙區 (Jiǎ xian qū, Kaohsiung)", "847 高雄市  甲仙區 Kaohsiung Jiǎ xian qū"));
  results.push(getOptionAutoComplete(848, "848 高雄市 桃源區 (Táoyuán qū, Kaohsiung)", "848 高雄市  桃源區 Kaohsiung Táoyuán qū"));
  results.push(getOptionAutoComplete(849, "849 高雄市 那瑪夏區 (Nà mǎ xià qū, Kaohsiung)", "849 高雄市  那瑪夏區 Kaohsiung Nà mǎ xià qū"));
  results.push(getOptionAutoComplete(851, "851 高雄市 茂林區 (Mào lín qū, Kaohsiung)", "851 高雄市  茂林區 Kaohsiung Mào lín qū"));
  results.push(getOptionAutoComplete(852, "852 高雄市 茄萣區 (Jiāding qū, Kaohsiung)", "852 高雄市  茄萣區 Kaohsiung Jiāding qū"));
  results.push(getOptionAutoComplete(880, "880 澎湖縣 馬公 (Mǎgōng, Penghu County)", "880 澎湖縣  馬公 Penghu County Mǎgōng"));
  results.push(getOptionAutoComplete(881, "881 澎湖縣 西嶼 (Xi yǔ, Penghu County)", "881 澎湖縣  西嶼 Penghu County Xi yǔ"));
  results.push(getOptionAutoComplete(882, "882 澎湖縣 望安 (Wàng ān, Penghu County)", "882 澎湖縣  望安 Penghu County Wàng ān"));
  results.push(getOptionAutoComplete(883, "883 澎湖縣 七美 (Qīměi, Penghu County)", "883 澎湖縣  七美 Penghu County Qīměi"));
  results.push(getOptionAutoComplete(884, "884 澎湖縣 白沙 (Báishā, Penghu County)", "884 澎湖縣  白沙 Penghu County Báishā"));
  results.push(getOptionAutoComplete(885, "885 澎湖縣 湖西 (Húxi, Penghu County)", "885 澎湖縣  湖西 Penghu County Húxi"));
  results.push(getOptionAutoComplete(890, "890 金門縣 金沙 (Jīnshā, Kinmen County)", "890 金門縣  金沙 Kinmen County Jīnshā"));
  results.push(getOptionAutoComplete(891, "891 金門縣 金湖 (Jīn hú, Kinmen County)", "891 金門縣  金湖 Kinmen County Jīn hú"));
  results.push(getOptionAutoComplete(892, "892 金門縣 金寧 (Jīn níng, Kinmen County)", "892 金門縣  金寧 Kinmen County Jīn níng"));
  results.push(getOptionAutoComplete(893, "893 金門縣 金城 (Jīnchéng, Kinmen County)", "893 金門縣  金城 Kinmen County Jīnchéng"));
  results.push(getOptionAutoComplete(894, "894 金門縣 烈嶼 (Liè yǔ, Kinmen County)", "894 金門縣  烈嶼 Kinmen County Liè yǔ"));
  results.push(getOptionAutoComplete(896, "896 金門縣 烏坵 (Wū qiū, Kinmen County)", "896 金門縣  烏坵 Kinmen County Wū qiū"));
  results.push(getOptionAutoComplete(900, "900 屏東縣 屏東 (Píng dōng, Pingtung County)", "900 屏東縣  屏東 Pingtung County Píng dōng"));
  results.push(getOptionAutoComplete(901, "901 屏東縣 三地門 (Sān dì mén, Pingtung County)", "901 屏東縣  三地門 Pingtung County Sān dì mén"));
  results.push(getOptionAutoComplete(902, "902 屏東縣 霧臺 (Wù tái, Pingtung County)", "902 屏東縣  霧臺 Pingtung County Wù tái"));
  results.push(getOptionAutoComplete(903, "903 屏東縣 瑪家 (Mǎ jiā, Pingtung County)", "903 屏東縣  瑪家 Pingtung County Mǎ jiā"));
  results.push(getOptionAutoComplete(904, "904 屏東縣 九如 (Jiǔ rú, Pingtung County)", "904 屏東縣  九如 Pingtung County Jiǔ rú"));
  results.push(getOptionAutoComplete(905, "905 屏東縣 里港 (Li gǎng, Pingtung County)", "905 屏東縣  里港 Pingtung County Li gǎng"));
  results.push(getOptionAutoComplete(906, "906 屏東縣 高樹 (Gāoshù, Pingtung County)", "906 屏東縣  高樹 Pingtung County Gāoshù"));
  results.push(getOptionAutoComplete(907, "907 屏東縣 盬埔 (Gǔ bù, Pingtung County)", "907 屏東縣  盬埔 Pingtung County Gǔ bù"));
  results.push(getOptionAutoComplete(908, "908 屏東縣 長治 (Chángzhì, Pingtung County)", "908 屏東縣  長治 Pingtung County Chángzhì"));
  results.push(getOptionAutoComplete(909, "909 屏東縣 麟洛 (Lín luò, Pingtung County)", "909 屏東縣  麟洛 Pingtung County Lín luò"));
  results.push(getOptionAutoComplete(911, "911 屏東縣 竹田 (Zhútián, Pingtung County)", "911 屏東縣  竹田 Pingtung County Zhútián"));
  results.push(getOptionAutoComplete(912, "912 屏東縣 內埔 (Nèi bù, Pingtung County)", "912 屏東縣  內埔 Pingtung County Nèi bù"));
  results.push(getOptionAutoComplete(913, "913 屏東縣 萬丹 (Wàn dān, Pingtung County)", "913 屏東縣  萬丹 Pingtung County Wàn dān"));
  results.push(getOptionAutoComplete(920, "920 屏東縣 潮州 (Cháozhōu, Pingtung County)", "920 屏東縣  潮州 Pingtung County Cháozhōu"));
  results.push(getOptionAutoComplete(921, "921 屏東縣 泰武 (Tài wǔ, Pingtung County)", "921 屏東縣  泰武 Pingtung County Tài wǔ"));
  results.push(getOptionAutoComplete(922, "922 屏東縣 來義 (Lái yì, Pingtung County)", "922 屏東縣  來義 Pingtung County Lái yì"));
  results.push(getOptionAutoComplete(923, "923 屏東縣 萬巒 (Wàn luán, Pingtung County)", "923 屏東縣  萬巒 Pingtung County Wàn luán"));
  results.push(getOptionAutoComplete(924, "924 屏東縣 崁頂 (Kàn dǐng, Pingtung County)", "924 屏東縣  崁頂 Pingtung County Kàn dǐng"));
  results.push(getOptionAutoComplete(925, "925 屏東縣 新埤 (Xīn pí, Pingtung County)", "925 屏東縣  新埤 Pingtung County Xīn pí"));
  results.push(getOptionAutoComplete(926, "926 屏東縣 南州 (Nán zhōu, Pingtung County)", "926 屏東縣  南州 Pingtung County Nán zhōu"));
  results.push(getOptionAutoComplete(927, "927 屏東縣 林邊 (Lín biān, Pingtung County)", "927 屏東縣  林邊 Pingtung County Lín biān"));
  results.push(getOptionAutoComplete(928, "928 屏東縣 東港 (Dōnggǎng, Pingtung County)", "928 屏東縣  東港 Pingtung County Dōnggǎng"));
  results.push(getOptionAutoComplete(929, "929 屏東縣 琉球 (Liúqiú, Pingtung County)", "929 屏東縣  琉球 Pingtung County Liúqiú"));
  results.push(getOptionAutoComplete(931, "931 屏東縣 佳冬 (Jiā dōng, Pingtung County)", "931 屏東縣  佳冬 Pingtung County Jiā dōng"));
  results.push(getOptionAutoComplete(932, "932 屏東縣 新園 (Xīn yuán, Pingtung County)", "932 屏東縣  新園 Pingtung County Xīn yuán"));
  results.push(getOptionAutoComplete(940, "940 屏東縣 枋寮 (Fāngliáo, Pingtung County)", "940 屏東縣  枋寮 Pingtung County Fāngliáo"));
  results.push(getOptionAutoComplete(941, "941 屏東縣 枋山 (Fāng shān, Pingtung County)", "941 屏東縣  枋山 Pingtung County Fāng shān"));
  results.push(getOptionAutoComplete(942, "942 屏東縣 春日 (Chūnrì, Pingtung County)", "942 屏東縣  春日 Pingtung County Chūnrì"));
  results.push(getOptionAutoComplete(943, "943 屏東縣 獅子 (Shīzi, Pingtung County)", "943 屏東縣  獅子 Pingtung County Shīzi"));
  results.push(getOptionAutoComplete(944, "944 屏東縣 車城 (Chē chéng, Pingtung County)", "944 屏東縣  車城 Pingtung County Chē chéng"));
  results.push(getOptionAutoComplete(945, "945 屏東縣 牡丹 (Mǔdān, Pingtung County)", "945 屏東縣  牡丹 Pingtung County Mǔdān"));
  results.push(getOptionAutoComplete(946, "946 屏東縣 恆春 (Héng chūn, Pingtung County)", "946 屏東縣  恆春 Pingtung County Héng chūn"));
  results.push(getOptionAutoComplete(947, "947 屏東縣 滿州 (Mǎn zhōu, Pingtung County)", "947 屏東縣  滿州 Pingtung County Mǎn zhōu"));
  results.push(getOptionAutoComplete(950, "950 臺東縣 臺東 (Tái dōng, Taitung)", "950 臺東縣 台東縣 臺東 Taitung Tái dōng"));
  results.push(getOptionAutoComplete(951, "951 臺東縣 綠島 (Lǜ dǎo, Taitung)", "951 臺東縣 台東縣 綠島 Taitung Lǜ dǎo"));
  results.push(getOptionAutoComplete(952, "952 臺東縣 蘭嶼 (Lán yǔ, Taitung)", "952 臺東縣 台東縣 蘭嶼 Taitung Lán yǔ"));
  results.push(getOptionAutoComplete(953, "953 臺東縣 延平 (Yánpíng, Taitung)", "953 臺東縣 台東縣 延平 Taitung Yánpíng"));
  results.push(getOptionAutoComplete(954, "954 臺東縣 卑南 (Pēi nán, Taitung)", "954 臺東縣 台東縣 卑南 Taitung Pēi nán"));
  results.push(getOptionAutoComplete(955, "955 臺東縣 鹿野 (Lùyě, Taitung)", "955 臺東縣 台東縣 鹿野 Taitung Lùyě"));
  results.push(getOptionAutoComplete(956, "956 臺東縣 關山 (Guānshān, Taitung)", "956 臺東縣 台東縣 關山 Taitung Guānshān"));
  results.push(getOptionAutoComplete(957, "957 臺東縣 海端 (Hǎi duān, Taitung)", "957 臺東縣 台東縣 海端 Taitung Hǎi duān"));
  results.push(getOptionAutoComplete(958, "958 臺東縣 池上 (Chíshàng, Taitung)", "958 臺東縣 台東縣 池上 Taitung Chíshàng"));
  results.push(getOptionAutoComplete(959, "959 臺東縣 東河 (Dōnghé, Taitung)", "959 臺東縣 台東縣 東河 Taitung Dōnghé"));
  results.push(getOptionAutoComplete(961, "961 臺東縣 成功 (Chénggōng, Taitung)", "961 臺東縣 台東縣 成功 Taitung Chénggōng"));
  results.push(getOptionAutoComplete(962, "962 臺東縣 長濱 (Zhǎngbīn, Taitung)", "962 臺東縣 台東縣 長濱 Taitung Zhǎngbīn"));
  results.push(getOptionAutoComplete(963, "963 臺東縣 太麻里 (Tài málǐ, Taitung)", "963 臺東縣 台東縣 太麻里 Taitung Tài málǐ"));
  results.push(getOptionAutoComplete(964, "964 臺東縣 金峰 (Jīnfēng, Taitung)", "964 臺東縣 台東縣 金峰 Taitung Jīnfēng"));
  results.push(getOptionAutoComplete(965, "965 臺東縣 大武 (Dàwǔ, Taitung)", "965 臺東縣 台東縣 大武 Taitung Dàwǔ"));
  results.push(getOptionAutoComplete(966, "966 臺東縣 達仁 (Dá rén, Taitung)", "966 臺東縣 台東縣 達仁 Taitung Dá rén"));
  results.push(getOptionAutoComplete(970, "970 花蓮縣 花蓮 (Huālián, Hualien County)", "970 花蓮縣  花蓮 Hualien County Huālián"));
  results.push(getOptionAutoComplete(971, "971 花蓮縣 新城 (Xīnchéng, Hualien County)", "971 花蓮縣  新城 Hualien County Xīnchéng"));
  results.push(getOptionAutoComplete(972, "972 花蓮縣 秀林 (Xiù lín, Hualien County)", "972 花蓮縣  秀林 Hualien County Xiù lín"));
  results.push(getOptionAutoComplete(973, "973 花蓮縣 吉安 (Jí'ān, Hualien County)", "973 花蓮縣  吉安 Hualien County Jí'ān"));
  results.push(getOptionAutoComplete(974, "974 花蓮縣 壽豐 (Shòu fēng, Hualien County)", "974 花蓮縣  壽豐 Hualien County Shòu fēng"));
  results.push(getOptionAutoComplete(975, "975 花蓮縣 鳳林 (Fèng lín, Hualien County)", "975 花蓮縣  鳳林 Hualien County Fèng lín"));
  results.push(getOptionAutoComplete(976, "976 花蓮縣 光復 (Guāngfù, Hualien County)", "976 花蓮縣  光復 Hualien County Guāngfù"));
  results.push(getOptionAutoComplete(977, "977 花蓮縣 豐濱 (Fēng bīn, Hualien County)", "977 花蓮縣  豐濱 Hualien County Fēng bīn"));
  results.push(getOptionAutoComplete(978, "978 花蓮縣 瑞穗 (Ruìsuì, Hualien County)", "978 花蓮縣  瑞穗 Hualien County Ruìsuì"));
  results.push(getOptionAutoComplete(979, "979 花蓮縣 萬榮 (Wàn róng, Hualien County)", "979 花蓮縣  萬榮 Hualien County Wàn róng"));
  results.push(getOptionAutoComplete(981, "981 花蓮縣 玉里 (Yù li, Hualien County)", "981 花蓮縣  玉里 Hualien County Yù li"));
  results.push(getOptionAutoComplete(982, "982 花蓮縣 卓溪 (Zhuō xī, Hualien County)", "982 花蓮縣  卓溪 Hualien County Zhuō xī"));
  results.push(getOptionAutoComplete(983, "983 花蓮縣 富里 (Fù li, Hualien County)", "983 花蓮縣  富里 Hualien County Fù li"));  
  return results;
}

function test2() {
  var postalCodes = getPostalCodes();
  Logger.log(postalCodes[78].filterText);
}
