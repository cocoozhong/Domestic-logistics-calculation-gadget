document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('city');
    const weightInput = document.getElementById('weight');
    const results = document.querySelectorAll('.result');

    // 模拟从CSV文件读取数据
    const shippingData = {
        "yunda": [
        { "city": "广东省内/东莞市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.65, 0.6, 0.55] },
        { "city": "广东省内/中山市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.65, 0.6, 0.55] },
        { "city": "广东省内/广州市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.65, 0.6, 0.55] },
        { "city": "广东省内/珠海市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.65, 0.6, 0.55] },
        { "city": "广东省内/佛山市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.65, 0.6, 0.55] },
        { "city": "广东省内/惠州市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.68, 0.63, 0.6] },
        { "city": "广东省内/深圳市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.68, 0.63, 0.6] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.68, 0.63, 0.6] },
        { "city": "广东省内/汕头市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/潮州市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/揭阳市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/汕尾市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/湛江市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/茂名市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/阳江市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/韶关市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/清远市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/河源市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/梅州市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/肇庆市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "广东省内/云浮市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.65] },
        { "city": "浙江省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.69] },
        { "city": "福建省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.69] },
        { "city": "江苏省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.69] },
        { "city": "广西省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.69] },
        { "city": "湖南省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.75] },
        { "city": "江西省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.89, 0.83, 0.75] },
        { "city": "安徽省", "firstWeight": 10, "firstPrice": 22, "additionalPrices": [0.89, 0.83, 0.75] },
        { "city": "湖北省", "firstWeight": 10, "firstPrice": 22, "additionalPrices": [0.89, 0.83, 0.75] },
        { "city": "上海市", "firstWeight": 10, "firstPrice": 22, "additionalPrices": [1.1, 0.9, 0.8] },
        { "city": "河南省", "firstWeight": 10, "firstPrice": 22, "additionalPrices": [1.1, 1, 0.9] },
        { "city": "山东省", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.05] },
        { "city": "山西省", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.05] },
        { "city": "天津市", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "陕西省", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "重庆市", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "河北省", "firstWeight": 10, "firstPrice": 26, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "四川省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.5, 1.3, 1.2] },
        { "city": "贵州省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.5, 1.3, 1.2] },
        { "city": "云南省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.5, 1.3, 1.2] },
        { "city": "北京市", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.6, 1.5, 1.4] },
        { "city": "海南省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.6, 1.5, 1.4] },
        { "city": "辽宁省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "吉林省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "黑龙江", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "甘肃省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "内蒙古", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "宁夏省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "青海省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "新疆省", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [4, 3.8, 3.6] },
        { "city": "西藏省", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [4, 3.8, 3.6] }
    ],
    "shunxin": [
        { "city": "广东省内/东莞市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/中山市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/广州市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/珠海市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/佛山市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/惠州市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/深圳市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广州天河", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广州越秀", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 15, "additionalPrices": [0.6, 0.6, 0.58] },
        { "city": "广东省内/汕头市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/潮州市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/揭阳市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/汕尾市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/湛江市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/茂名市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/阳江市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.7, 0.68, 0.65] },
        { "city": "广东省内/韶关市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/清远市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/河源市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/梅州市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/肇庆市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "广东省内/云浮市", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [0.65, 0.65, 0.6] },
        { "city": "浙江省舟山市", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.5, 1.3, 1.2] },
        { "city": "浙江省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.9, 0.85] },
        { "city": "福建省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.95, 0.9] },
        { "city": "江苏省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.9, 0.88] },
        { "city": "广西省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.95, 0.9] },
        { "city": "湖南省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.9, 0.88] },
        { "city": "江西省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.95, 0.9] },
        { "city": "安徽省", "firstWeight": 10, "firstPrice": 20, "additionalPrices": [1, 0.9, 0.88] },
        { "city": "湖北省", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [1.1, 1, 0.98] },
        { "city": "湖北省恩施自治州", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.2, 1.1, 1] },
        { "city": "湖北省十堰市", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.2, 1.1, 1] },
        { "city": "上海市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [1, 0.95, 0.88] },
        { "city": "河南省", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [1.1, 1, 0.98] },
        { "city": "山东省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.25, 1.15, 1] },
        { "city": "山西省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "天津市", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "陕西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "重庆市", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "重庆市自治州县", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.3, 1.2] },
        { "city": "河北省", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "四川省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.3, 1.2, 1.1] },
        { "city": "四川省自治州县", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.6, 1.4, 1.3] },
        { "city": "贵州省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.4, 1.3, 1.2] },
        { "city": "贵州省自治州县", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.6, 1.4, 1.3] },
        { "city": "云南省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.4, 1.3, 1.2] },
        { "city": "云南省自治州县", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.7, 1.6, 1.5] },
        { "city": "北京市", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.5, 1.35, 1.2] },
        { "city": "海南省", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [1.6, 1.5, 1.4] },
        { "city": "辽宁省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "吉林省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "黑龙江", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2, 1.8, 1.7] },
        { "city": "甘肃省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "内蒙古", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "宁夏省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "青海省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.5, 2.3, 2.2] },
        { "city": "新疆省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [3.5, 3.3, 3.2] },
        { "city": "西藏省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [3.5, 3.3, 3.2] }
    ],
    "zhongtong": [
        { "city": "广东省内/东莞市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/中山市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/广州市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/珠海市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/佛山市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/惠州市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/深圳市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 18, "additionalPrices": [0.7, 0.65, 0.62, 0.6, 0.58] },
        { "city": "广东省内/汕头市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/潮州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/揭阳市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/汕尾市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/湛江市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/茂名市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/阳江市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/韶关市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/清远市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/河源市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/梅州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/肇庆市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "广东省内/云浮市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8, 0.75, 0.7, 0.68, 0.65] },
        { "city": "浙江省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.85] },
        { "city": "福建省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.85] },
        { "city": "江苏省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.85] },
        { "city": "广西省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.85] },
        { "city": "湖南省", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.85] },
        { "city": "江西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.3, 1.2, 1.05, 1, 0.95] },
        { "city": "安徽省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.3, 1.2, 1.05, 1, 0.95] },
        { "city": "湖北省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.3, 1.2, 1.05, 1, 0.95] },
        { "city": "上海市", "firstWeight": 10, "firstPrice": 28, "additionalPrices": [1.2, 1.1, 1.05, 0.95, 0.9] },
        { "city": "河南省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.4, 1.3, 1.2, 1.1, 1.05] },
        { "city": "山东省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "山西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "天津市", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "陕西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "重庆市", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "河北省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.5, 1.4, 1.28, 1.18, 1.1] },
        { "city": "四川省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.6, 1.5, 1.4, 1.3, 1.2] },
        { "city": "贵州省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.6, 1.5, 1.4, 1.3, 1.2] },
        { "city": "云南省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.6, 1.5, 1.4, 1.3, 1.2] },
        { "city": "北京市", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.7, 1.6, 1.5, 1.4, 1.3] },
        { "city": "海南省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.7, 1.6, 1.5, 1.4, 1.3] },
        { "city": "辽宁省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.2, 2, 1.9, 1.8, 1.7] },
        { "city": "吉林省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.2, 2, 1.9, 1.8, 1.7] },
        { "city": "黑龙江", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.2, 2, 1.9, 1.8, 1.7] },
        { "city": "甘肃省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.6, 2.4, 2.2, 2.1, 2] },
        { "city": "内蒙古", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.6, 2.4, 2.2, 2.1, 2] },
        { "city": "宁夏省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.6, 2.4, 2.2, 2.1, 2] },
        { "city": "青海省", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [2.8, 2.6, 2.4, 2.3, 2.2] },
        { "city": "新疆省", "firstWeight": 10, "firstPrice": 55, "additionalPrices": [3.6, 3.2, 3, 2.8, 2.6] },
        { "city": "西藏省", "firstWeight": 10, "firstPrice": 60, "additionalPrices": [4.5, 4.1, 3.9, 3.7, 3.5] }
    ],
    "jym": [
        { "city": "广东省内/东莞市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/中山市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/广州市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/珠海市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/佛山市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/惠州市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/深圳市", "firstWeight": 1, "firstPrice": 8, "additionalPrices": [0.7] },
        { "city": "广东省内/江门市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/汕头市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/潮州市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/揭阳市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/汕尾市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/湛江市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/茂名市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/阳江市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/韶关市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/清远市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/河源市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/梅州市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/肇庆市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "广东省内/云浮市", "firstWeight": 1, "firstPrice": 10, "additionalPrices": [1] },
        { "city": "浙江省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "福建省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "江苏省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "广西省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "湖南省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "江西省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "安徽省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "湖北省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "上海市", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "河南省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "山东省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "山西省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "天津市", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "陕西省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "重庆市", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "河北省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "四川省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "贵州省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "云南省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "北京市", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "海南省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "辽宁省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "吉林省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "黑龙江", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "甘肃省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "内蒙古", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "宁夏省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "青海省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "新疆省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] },
        { "city": "西藏省", "firstWeight": 1, "firstPrice": 0, "additionalPrices": [0] }
    ],
    "annengbz": [
        { "city": "广东省内/东莞市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/中山市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/广州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/珠海市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/佛山市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/惠州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/深圳市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "深圳盐田", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广州天河", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广州越秀", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广州白云", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广州黄埔", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.68] },
        { "city": "广东省内/汕头市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/潮州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/揭阳市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/汕尾市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8] },
        { "city": "广东省内/湛江市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/茂名市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/韶关市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/清远市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/河源市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.78] },
        { "city": "广东省内/梅州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/肇庆市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.78] },
        { "city": "广东省内/云浮市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.78] },
        { "city": "浙江省舟山市", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1] },
        { "city": "浙江省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1] },
        { "city": "福建省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1] },
        { "city": "江苏省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1] },
        { "city": "广西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.1] },
        { "city": "湖南省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.2] },
        { "city": "江西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.1] },
        { "city": "安徽省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.2] },
        { "city": "湖北省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.2] },
        { "city": "湖北省恩施自治州", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.2] },
        { "city": "湖北省十堰市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.2] },
        { "city": "上海市", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1] },
        { "city": "河南省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.2] },
        { "city": "山东省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.48] },
        { "city": "山西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.58] },
        { "city": "天津市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.48] },
        { "city": "陕西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.48] },
        { "city": "重庆市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.48] },
        { "city": "重庆市自治州县", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.48] },
        { "city": "河北省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.48] },
        { "city": "四川省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.58] },
        { "city": "四川省自治州县", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.5] },
        { "city": "贵州省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.5] },
        { "city": "贵州省自治州县", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.5] },
        { "city": "云南省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.6] },
        { "city": "云南省自治州县", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.9] },
        { "city": "北京市", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.5] },
        { "city": "海南省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.9] },
        { "city": "辽宁省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2] },
        { "city": "吉林省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2] },
        { "city": "黑龙江", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.3] },
        { "city": "甘肃省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2] },
        { "city": "内蒙古", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [3] },
        { "city": "宁夏省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2] },
        { "city": "青海省", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [3] },
        { "city": "新疆省", "firstWeight": 10, "firstPrice": 60, "additionalPrices": [3.8] },
        { "city": "西藏省", "firstWeight": 10, "firstPrice": 60, "additionalPrices": [4] }
    ],
    "annengdsd": [
        { "city": "广东省内/东莞市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/中山市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/广州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/珠海市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/佛山市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/惠州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/深圳市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "深圳盐田", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.9] },
        { "city": "广州天河", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.9] },
        { "city": "广州越秀", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.9] },
        { "city": "广州白云", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.9] },
        { "city": "广州黄埔", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.9] },
        { "city": "广东省内/江门市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.75] },
        { "city": "广东省内/汕头市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/潮州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/揭阳市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/汕尾市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/湛江市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/茂名市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/阳江市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/韶关市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/清远市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8] },
        { "city": "广东省内/河源市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8] },
        { "city": "广东省内/梅州市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.85] },
        { "city": "广东省内/肇庆市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8] },
        { "city": "广东省内/云浮市", "firstWeight": 10, "firstPrice": 25, "additionalPrices": [0.8] },
        { "city": "浙江省舟山市", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.28] },
        { "city": "浙江省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.28] },
        { "city": "福建省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.28] },
        { "city": "江苏省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.28] },
        { "city": "广西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.35] },
        { "city": "湖南省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.38] },
        { "city": "江西省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.35] },
        { "city": "安徽省", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.38] },
        { "city": "湖北省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.38] },
        { "city": "湖北省恩施自治州", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.38] },
        { "city": "湖北省十堰市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.38] },
        { "city": "上海市", "firstWeight": 10, "firstPrice": 30, "additionalPrices": [1.28] },
        { "city": "河南省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.58] },
        { "city": "山东省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.68] },
        { "city": "山西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.68] },
        { "city": "天津市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.68] },
        { "city": "陕西省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.68] },
        { "city": "重庆市", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.68] },
        { "city": "重庆市自治州县", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.68] },
        { "city": "河北省", "firstWeight": 10, "firstPrice": 32, "additionalPrices": [1.68] },
        { "city": "四川省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [1.68] },
        { "city": "四川省自治州县", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.7] },
        { "city": "贵州省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.75] },
        { "city": "贵州省自治州县", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.75] },
        { "city": "云南省", "firstWeight": 10, "firstPrice": 35, "additionalPrices": [1.93] },
        { "city": "云南省自治州县", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.1] },
        { "city": "北京市", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [1.75] },
        { "city": "海南省", "firstWeight": 10, "firstPrice": 38, "additionalPrices": [2.1] },
        { "city": "辽宁省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.3] },
        { "city": "吉林省", "firstWeight": 10, "firstPrice": 40, "additionalPrices": [2.3] },
        { "city": "黑龙江", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.9] },
        { "city": "甘肃省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.3] },
        { "city": "内蒙古", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [3.3] },
        { "city": "宁夏省", "firstWeight": 10, "firstPrice": 45, "additionalPrices": [2.3] },
        { "city": "青海省", "firstWeight": 10, "firstPrice": 50, "additionalPrices": [3.3] },
        { "city": "新疆省", "firstWeight": 10, "firstPrice": 60, "additionalPrices": [3.8] },
        { "city": "西藏省", "firstWeight": 10, "firstPrice": 60, "additionalPrices": [4.3] }
    ],
    "yuantong": [
        { 
            "city": "上海市", 
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 1.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "广东省",
            "firstWeight": 1,
            "firstPrice": 3.80,
            "additionalPrices": [1.00],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "广东省内/深圳市",
            "firstWeight": 1,
            "firstPrice": 3.80,
            "additionalPrices": [1.00],
            "addFee": 0.50,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "浙江省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "安徽省",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "广西省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "福建省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "江西省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "湖北省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "湖南省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "河南省",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [2.40],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "北京市",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [2.40],
            "addFee": 1.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "海南省",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [2.90],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "天津市",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [2.40],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "河北省",
            "firstWeight": 1,
            "firstPrice": 5.30,
            "additionalPrices": [2.40],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "山东省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [2.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "山西省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [3.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "江苏省",
            "firstWeight": 1,
            "firstPrice": 4.80,
            "additionalPrices": [1.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "云南省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [2.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "贵州省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [2.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "四川省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [2.80],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "陕西省",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [3.00],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "重庆市",
            "firstWeight": 1,
            "firstPrice": 5.80,
            "additionalPrices": [3.10],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "黑龙江",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "吉林省",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "辽宁省",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "甘肃省",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "宁夏省",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "青海省",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "内蒙古",
            "firstWeight": 1,
            "firstPrice": 9.30,
            "additionalPrices": [6.20],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 1.40 },
                { "weight": 0.5, "price": 1.70 },
                { "weight": 1.0, "price": 2.20 },
                { "weight": 1.5, "price": 3.10 },
                { "weight": 2.0, "price": 3.30 },
                { "weight": 2.5, "price": 3.60 },
                { "weight": 3.0, "price": 3.80 }
            ]
        },
        {
            "city": "新疆省",
            "firstWeight": 1,
            "firstPrice": 10.00,
            "additionalPrices": [15.00],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 8.00 },
                { "weight": 0.5, "price": 8.00 },
                { "weight": 1.0, "price": 12.00 },
                { "weight": 1.5, "price": 16.00 },
                { "weight": 2.0, "price": 20.00 },
                { "weight": 2.5, "price": 25.00 },
                { "weight": 3.0, "price": 30.00 }
            ]
        },
        {
            "city": "西藏省",
            "firstWeight": 1,
            "firstPrice": 12.00,
            "additionalPrices": [17.00],
            "addFee": 0.00,
            "ranges": [
                { "weight": 0.3, "price": 8.00 },
                { "weight": 0.5, "price": 9.00 },
                { "weight": 1.0, "price": 14.00 },
                { "weight": 1.5, "price": 18.00 },
                { "weight": 2.0, "price": 26.00 },
                { "weight": 2.5, "price": 32.00 },
                { "weight": 3.0, "price": 38.00 }
            ]
        }
    ]
        // ... 其他物流公司数据
    };

    const companyMapping = {
        'yunda': '韵达快运',
        'shunxin': '顺心捷达',
        'zhongtong': '中通快运',
        'jym': '加运美',
        'annengbz': '安能标准',
        'annengdsd': '安能定时达',
        'yuantong': '圆通快递'
    };

    function calculateShipping(company, city, weight) {
        const companyName = companyMapping[company];
        let data;
        
        // 1. 首先尝试完全匹配
        data = shippingData[company].find(item => item.city === city);
        
        // 2. 如果没找到，检查是否是特殊区域（包含"/"的城市）
        if (!data && city.includes('/')) {
            const [province, specificCity] = city.split('/');
            data = shippingData[company].find(item => item.city === city);
        }
        
        // 3. 如果还是没找到，尝试模糊匹配省份
        if (!data) {
            const items = shippingData[company].filter(item => item.city.includes(city));
            if (items.length > 0) {
                // 优先选择最短的匹配（通常是省份）
                data = items.reduce((a, b) => 
                    a.city.length <= b.city.length ? a : b
                );
            }
        }
        
        if (!data) return '-';

        const { firstWeight, firstPrice, additionalPrices } = data;
        weight = parseFloat(weight);
        
        let finalPrice;
        
        switch(companyName) {
            case '韵达快运':
                if (weight <= firstWeight) {
                    finalPrice = firstPrice;
                } else if (weight <= 300) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[0];
                } else if (weight <= 800) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[1];
                } else {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[2];
                }
                break;
            case '顺心捷达':
                if (weight <= firstWeight) {
                    finalPrice = firstPrice;
                } else if (weight <= 500) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[0];
                } else if (weight <= 1000) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[1];
                } else {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[2];
                }
                break;
            case '中通快运':
                if (weight <= firstWeight) {
                    finalPrice = firstPrice;
                } else if (weight <= 70) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[0];
                } else if (weight <= 400) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[1];
                } else if (weight <= 700) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[2];
                } else if (weight <= 1000) {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[3];
                } else {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[4];
                }
                break;
            case '加运美':
                if (weight <= firstWeight) {
                    finalPrice = firstPrice;
                } else {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[0];
                }
                break;
            case '安能标准':
            case '安能定时达':
                if (weight <= firstWeight) {
                    finalPrice = firstPrice;
                } else {
                    finalPrice = firstPrice + (weight - firstWeight) * additionalPrices[0];
                }
                break;
            case '圆通快递':
                try {
                    if (!data || !data.ranges) {
                        return '-';
                    }

                    const weightNum = parseFloat(weight);
                    
                    if (weightNum <= 3.0) {
                        let rangePrice = data.ranges[0].price;
                        for (const range of data.ranges) {
                            if (weightNum <= range.weight) {
                                rangePrice = range.price;
                                break;
                            }
                        }
                        finalPrice = rangePrice;
                    } else {
                        finalPrice = data.firstPrice + (weightNum - data.firstWeight) * data.additionalPrices[0];
                    }

                    if (typeof data.addFee === 'number') {
                        finalPrice += data.addFee;
                    }
                } catch (error) {
                    console.error('圆通快递计算错误:', error, data);
                    return '-';
                }
                break;
            default:
                finalPrice = '-';
        }
        
        return typeof finalPrice === 'number' ? finalPrice.toFixed(2) : '-';
    }

    function updateResults() {
        const city = cityInput.value.trim();
        const weight = parseFloat(weightInput.value);

        if (!city || isNaN(weight)) return;

        results.forEach(result => {
            const company = result.id;
            const price = calculateShipping(company, city, weight);
            result.textContent = price;
        });
    }

    cityInput.addEventListener('input', updateResults);
    weightInput.addEventListener('input', updateResults);

    // 城市筛选功能
    function filterCities(input, data) {
        const inputLower = input.toLowerCase();
        return data.filter(item => {
            const cityLower = item.city.toLowerCase();
            return cityLower.includes(inputLower) || cityLower.split('/').some(part => part.startsWith(inputLower));
        });
    }

    function getAllCities() {
        // 创建Set来存储不重复的城市
        const allCities = new Set();
        
        // 遍历所有快递公司的数据
        Object.keys(shippingData).forEach(company => {
            shippingData[company].forEach(cityData => {
                allCities.add(cityData.city);
            });
        });
        
        // 转换为数组并排序
        return Array.from(allCities).sort((a, b) => {
            // 广东省内城市排在前面
            if (a.startsWith('广东省内') && !b.startsWith('广东省内')) return -1;
            if (!a.startsWith('广东省内') && b.startsWith('广东省内')) return 1;
            // 特殊区域（如深圳盐田、广州天河等）排在第二位
            if ((a.startsWith('深圳') || a.startsWith('广州')) && 
                !(b.startsWith('深圳') || b.startsWith('广州'))) return -1;
            if (!(a.startsWith('深圳') || a.startsWith('广州')) && 
                (b.startsWith('深圳') || b.startsWith('广州'))) return 1;
            // 其他按字母顺序排序
            return a.localeCompare(b, 'zh-CN');
        });
    }

    function updateCityOptions(input) {
        const allCities = getAllCities();
        const cityOptions = document.getElementById('cityOptions');
        cityOptions.innerHTML = '';
        
        // 如果有输入，进行筛选
        const filteredCities = input ? 
            allCities.filter(city => {
                const cityLower = city.toLowerCase();
                const inputLower = input.toLowerCase();
                return cityLower.includes(inputLower) || 
                       cityLower.split('/').some(part => 
                           part.includes(inputLower)
                       );
            }) : allCities;

        // 创建选项
        filteredCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city; // 显示完整城市名
            cityOptions.appendChild(option);
        });
    }

    // 初始化显示所有城市
    updateCityOptions('');
    
    // 添加事件监听
    cityInput.addEventListener('input', function() {
        updateCityOptions(this.value);
        updateResults();
    });
    weightInput.addEventListener('input', updateResults);
});
