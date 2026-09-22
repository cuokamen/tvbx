function main(config) {
  config["proxy-groups"] = [
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/Static.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      name: "PROXY",
      type: "select",
      proxies: ["AUTO","TW AUTO", "HK AUTO", "SG AUTO", "JP AUTO", "US AUTO"],
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/Urltest.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      name: "AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/OpenAI.png",
      name: "AIGC",
      type: "select",
      proxies: ["AUTO", "TW AUTO","HK AUTO", "SG AUTO", "JP AUTO", "US AUTO"],
    },
   {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/CN.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)台湾|中国|CN|TW",
      name: "TW AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/HK.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)香港|Hong Kong|HK|🇭🇰",
      name: "HK AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/SG.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)新加坡|Singapore|🇸🇬",
      name: "SG AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/JP.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)日本|Japan|🇯🇵",
      name: "JP AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/US.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)美国|USA|🇺🇸",
      name: "US AUTO",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://testingcf.jsdelivr.net/gh/Orz-3/mini@master/Color/Global.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      proxies: ["DIRECT","PROXY","AUTO", "TW AUTO","HK AUTO", "SG AUTO", "JP AUTO", "US AUTO"],
      name: "GLOBAL",
      type: "select",
    }
  ];
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"], {
    cn_domain: {
      url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.yaml",
      path: "./ruleset/cn_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    reject: {
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
      path: "./ruleset/reject.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    gfw: {
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
      path: "./ruleset/gfw.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    google_domain: {
      url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.yaml",
      path: "./ruleset/google_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    "geolocation-!cn": {
      url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/geolocation-!cn.yaml",
      path: "./ruleset/geolocation-!cn.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_ip: {
      url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.yaml",
      path: "./ruleset/cn_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    google_ip: {
      url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.yaml",
      path: "./ruleset/google_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
  });

  config["rules"] = [
    "RULE-SET,reject,REJECT",
    "RULE-SET,gfw,AIGC",
    "RULE-SET,google_domain,AIGC",
    "RULE-SET,google_ip,AIGC",
    "RULE-SET,geolocation-!cn,AIGC",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,PROXY",
  ];
  return config;
}
