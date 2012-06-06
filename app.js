var request = require('request');

exports.sms = function(params, cb){
  request.post({
    url: 'http://www.o2online.ie/amserver/UI/Login?org=o2ext&goto=%2F%2Fwww.o2online.ie%2Fo2%2Fmy-o2%2F',
    //followAllRedirects: true,
    headers: {
      "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Content-Type": "Type:application/x-www-form-urlencoded",
      "Cookie": "CoreID6=14213722570513069286604&ci=90301855; optimizelyEndUserId=oeu1310143149421r0.8519073373172432; reevoo__utma=1.634383915.1310573674.1310573674.1310573674.1; optimizelyBuckets=%7B%7D; VISITORID=1124938102; PHPSESSID=6quu7cbt9m5idkcd6otpvs8ph1; cmTPSet=Y; X-Mapping-gocjamlp=D37DFF424BF3779612D786E135F0BF7F; o2_phishing_notice=1; JSESSIONID=9DEDC3398A8AF2346EB36DE4DECA06CE; o3sisCookie=qUn+zniTR5Q2bHcfZmPtCqEGK90Hi/FSSLnLrXPgFA96PMt6dStfVmcGA9h2WQCPsrZbiZHI/28=; o2onlinewebserver=blaecrmiwsp01-3DUjkQqJwBIAACOMbOEAAACQ; JSESSIONID_Portal=0000ZyPZcZOvrEpSk59ibl89Rs2:118lqihss; 90301855_clogin=l=1337866607&v=1&e=1338763656433; WRUID=0; __utma=240818013.138441651.1318676639.1338758059.1338761832.89; __utmb=240818013.5.10.1338761832; __utmc=240818013; __utmz=240818013.1336592751.74.21.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=http://www.o2online.ie/; 90301855_clogin=l=1337866607&v=1&e=1338763663884; cmRS=&t1=1338761856423&t2=1338761856622&t3=-1&t4=1338761856312&fti=1338761863880&fn=searchform%3A0%3Bo2login_form%3A1%3B&ac=1:S&fd=1%3A15%3AIDToken1%3B&uer=&fu=https%3A//www.o2online.ie/amserver/UI/Login%3Forg%3Do2ext%26goto%3D%252F%252Fwww.o2online.ie%252Fo2%252Fmy-o2%252F&pi=http%3A//www.o2online.ie/o2/login/&ho=data.coremetrics.com/eluminate%3F&ci=90301855&cjen=1",
      "Origin" : "http://www.o2online.ie"
    },
    body: [
      "email=",
      "pwd=",
      "form_submit=Submit",
      "org=o2ext",
      "CONNECTFORMGET=true",
      "username=",
      "password=",
      "goto=",
      "group1=My O2",
      "fromThisPage=1",
      "IDToken1=" + params.username,
      "IDToken2=" + params.password].join("&")
  },
  function (error, response, body) {
    console.log(response.headers);
    console.log(body);
    if(response.statusCode == 201){
      console.log('Status Update');
    } else {
      console.log('error: '+ response.statusCode);
      console.log(body);
    }
  }
  );

};

