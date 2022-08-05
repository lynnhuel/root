/**
 * 汪汪兼职 
 * 地址： https://raw.githubusercontent.com/yml2213/template/master/jiaocheng.js
 * 
 * 汪汪兼职    这里是写脚本说明的地方
 * 本脚本仅用于学习使用请勿直接运行
 * 
 * ========= 青龙 =========
 * 变量格式：export wwapp=' xxxx & xxx @  xxxx & xxx '  多个账号用 @分割 
 * 
 */

 const jsname = "汪汪兼职";
 const $ = Env(jsname);
 const notify = $.isNode() ? require('./sendNotify') : '';      // 这里是 node（青龙属于node环境）通知相关的
 const Notify = 1; //0为关闭通知，1为打开通知,默认为1
 const debug = 1; //0为关闭调试，1为打开调试,默认为0
 //////////////////////
 let wwapp = process.env.wwapp;               // 这里是 从青龙的 配置文件 读取你写的变量
 let wwappArr = [];
 let data = '';
 let msg = '';
 
 
 !(async () => {
 
	 if (!(await Envs()))  	//多账号分割 判断变量是否为空  初步处理多账号
		 return;
	 else {
 
		 console.log(`(本地脚本7-18 )`);       // console.log是输出信息的，可以在脚本日志中看到输出（打印）的信息
 
		 console.log(`\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
			 new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
			 8 * 60 * 60 * 1000).toLocaleString()} \n=========================================\n`);
 
		 await wyy();
 
		 console.log(`\n=================== 共找到 ${wwsspappArr.length} 个账号 ===================`)
 
		 if (debug) {
			 //console.log(`【debug】 这是你的全部账号数组:\n ${wwsspappArr}`);  //这是打印账号信息
		 }
 
 
		 for (let index = 0; index < wwsspappArr.length; index++) {
 
 
			 let num = index + 1
			 console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)
 
			 data = wwsspappArr[index].split('&');      // 这里是分割你每个账号的每个小项   
			 deviceId = wwsspapp.match(/device_id=[-\w]{0,100}/);   //获取当前设备的id
 
			 if (debug) {
				 //console.log(`\n 【debug】 这是你第 ${num} 账号信息:\n ${data}\n`);  //这个是第几个账号的信息
			 }
 
 
			 // 这里是开始做任务    需要注意的点
			 // 	1. await只能运行与async函数中
			 // 	2. 函数的名字不可以相同
			 //      3. 不够可以自己复制
			 /*
			 for(i=0;i<5;i++){
				 sleep =randomInt(61,65);    //这个是随机延时多少秒
				 console.log('开始第'+i+'次任务');
				 await 任务();
				 console.log('延迟'+sleep+'秒后开始下一个任务');
				 await $.wait(sleep*1000);
			 }
			 */
	            sleep = randomInt(120,130);
				await $.wait(2000);
				await 签到();
				console.log('随机延迟'+sleep/1000+'秒');
				await $.wait(sleep*1000);
				await 体验每天赚点();
				await $.wait(2000);
				await 领取体验每天赚点奖励();
				console.log('随机延迟'+sleep/1000+'秒');
				await $.wait(sleep*1000);
				await 体验爱上兼职();
				await $.wait(2000);
				await 领取体验爱上兼职奖励();
			    await $.wait(2000);
			    await 分享一次视频();
			
			




			 await SendMsg(msg);    // 与发送通知有关系
		 }
	 }
 
 })()
	 .catch((e) => $.logErr(e))
	 .finally(() => $.done())
 
 
 //------------------------------下面是函数部分------------------------------
 
 
 
 


function 签到(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?getRedEnvelope`,
			headers: {
				"taskid": data[1],
				"version_mtzd": "101",
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "143",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `taskid=1321546218&userid=${data[0]}&version_mtzd=101&currentOaid=&patchversion=1000&channelid=hbsp_ali&originchannel=mtzd`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【签到】：${result.msg} 🎉获得:${result.obj.gold}金币 \n`)
				} else {

					console.log(`【签到】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}
 
 

function 体验每天赚点(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?saveAppMonitorInfo`,
			headers: {
				"Accept-Language": "zh-CN,zh;q=0.8",
				"taskid": data[2],
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "166",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `channelid=hbsp_ali&userid=${data[0]}&version_mtzd=101&patchversion=1000&currentOaid=&originchannel=mtzd&monitortime=120&type=0&taskid=1321546213`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【体验每天赚点】：${result.msg} 🎉 `)
				} else {

					console.log(`【体验每天赚点】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}

function 领取体验每天赚点奖励(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?getRedEnvelope`,
			headers: {
				"taskid": data[3],
				"version_mtzd": "101",
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "143",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `taskid=1321546213&userid=${data[0]}&version_mtzd=101&currentOaid=&patchversion=1000&channelid=hbsp_ali&originchannel=mtzd`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【体验每天赚点】：${result.msg} 🎉获得:${result.obj.gold}金币 \n`)
				} else {

					console.log(`【体验每天赚点】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}
 
function 体验爱上兼职(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?saveAppMonitorInfo`,
			headers: {
				"Accept-Language": "zh-CN,zh;q=0.8",
				"taskid": data[4],
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "166",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `channelid=hbsp_ali&userid=${data[0]}&version_mtzd=101&patchversion=1000&currentOaid=&originchannel=mtzd&monitortime=120&type=0&taskid=1321546214`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【体验爱上兼职】：${result.msg} 🎉`)
				} else {

					console.log(`【体验爱上兼职】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}

function 领取体验爱上兼职奖励(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?getRedEnvelope`,
			headers: {
				"taskid": data[5],
				"version_mtzd": "101",
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "143",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `taskid=1321546214&userid=${data[0]}&version_mtzd=101&currentOaid=&patchversion=1000&channelid=hbsp_ali&originchannel=mtzd`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【领取体验爱上兼职奖励】：${result.msg} 🎉获得:${result.obj.gold}金币 \n`)
				} else {

					console.log(`【领取体验爱上兼职奖励】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}
 
function 分享一次视频(timeout = 0) {
	return new Promise((resolve) => {

		let url = {
			url: `http://video.hnmzq.com/api/redClockController.do?getRedEnvelope`,
			headers: {
				"taskid": data[6],
				"version_mtzd": "101",
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": "143",
				"Host": "video.hnmzq.com",
				"Connection": "Keep-Alive",
				"Accept-Encoding": "gzip",
				"User-Agent": "okhttp/3.12.1",
				
			},
			body: `taskid=1321546215&userid=${data[0]}&version_mtzd=101&currentOaid=&patchversion=1000&channelid=hbsp_ali&originchannel=mtzd`,
		}
		$.post(url, async (err, resp, data) => {
			try {

				let result = JSON.parse(data)

				if (result.success == true) {

					console.log(`【分享一次视频】：${result.msg} 🎉获得:${result.obj.gold}金币 \n`)
				} else {

					console.log(`【分享一次视频】：${result.msg} 🎉`)

				}
			} catch (e) {

			} finally {

				resolve()
			}
		}, timeout)
	})
}
 
 
 
 
 
 // 如果有更多的需求，直接复制上一个函数，改个名   然后稍微更改一下内容   就可以用了   
 // 不要忘记与上面的 函数调用对应起来鸭
 //下面是固定代码，不需要动
 //   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 /**
  *    GET请求
  * 下面我们来看看函数需要注意的东西吧
  */
  function s(timeout = 3 * 1000) {
	 return new Promise((resolve) => {
		 let url = {
			 url: `https://qualcomm.growthideadata.com/qualcomm-app/api/user/signIn?userId=${data[1]}`,    // 这是请求的 url 可以直接用我们抓包、精简后的URL
			 headers: {            // headers 是请求体  可以直接用精简后的 hd  也就是服务器校验的部分，他需要啥，我们就给他啥  
			 },
			 // body: '',       // 这是一个 get 请求，没有请求体 body   如果是 post 不要忘记他鸭！
 
		 }
 
		 if (debug) {
			 console.log(`\n【debug】=============== 这是 签到 请求 url ===============`);
			 console.log(JSON.stringify(url));     //这个是打印请求的url日志信息
		 }
 
		 $.get(url, async (error, response, data) => {     // 这是一个 get 请求 , 如果是 post  记得把这里改了 
			 try {
				 if (debug) {
					 console.log(`\n\n【debug】===============这是 签到 返回data==============`);
					 console.log(data)     //这个是答应服务器返回的信息
				 }
 
				 let result = JSON.parse(data);
				 if (result.code == 200) {        // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`【签到】${result.message} 🎉 `)
					 msg += `\n【签到】${result.message} 🎉` 
 
				 } else if (result.code === 1) {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ,可能是:${result.message}!\n `)
					 
 
				 } else if (result.code === 40001) {   // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ,可能是:${result.message}!\n `)
					 
 
				 } else {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)
					 
 
				 }
 
			 } catch (e) {
				 console.log(e)
			 } finally {
				 resolve();
			 }
		 }, timeout)
	 })
 }
 
 
 
 /**
  *    post请求
  * 下面我们来看看函数需要注意的东西吧
  */
  function si(timeout = 3 * 1000) {
	 return new Promise((resolve) => {
		 let url = {
			 url: `https://qualcomm.growthideadata.com/qualcomm-app/api/user/signIn?userId=${data[1]}`,    // 这是请求的 url 可以直接用我们抓包、精简后的URL
			 headers: {            // headers 是请求体  可以直接用精简后的 hd  也就是服务器校验的部分，他需要啥，我们就给他啥  
			 },
			 // body: '',       // 这是一个 get 请求，没有请求体 body   如果是 post 不要忘记他鸭！
 
		 }
 
		 if (debug) {
			 console.log(`\n【debug】=============== 这是 签到 请求 url ===============`);
			 console.log(JSON.stringify(url));     //这个是打印请求的url日志信息
		 }
 
		 $.post(url, async (error, response, data) => {     // 这是一个 get 请求 , 如果是 post  记得把这里改了 
			 try {
				 if (debug) {
					 console.log(`\n\n【debug】===============这是 签到 返回data==============`);
					 console.log(data)     //这个是答应服务器返回的信息
				 }
 
				 let result = JSON.parse(data);
				 if (result.code == 200) {        // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`【签到】${result.message} 🎉 `)
					 msg += `\n【签到】${result.message} 🎉` 
 
				 } else if (result.code === 1) {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ,可能是:${result.message}!\n `)
					 
 
				 } else if (result.code === 40001) {   // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ,可能是:${result.message}!\n `)
					 
 
				 } else {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					 console.log(`\n【签到】 失败 ❌ 了呢,可能是网络被外星人抓走了!\n `)
					 
 
				 }
 
			 } catch (e) {
				 console.log(e)
			 } finally {
				 resolve();
			 }
		 }, timeout)
	 })
 }
 
 
 
 
 
 
 //获取当前时间戳
 
 async function timestamp (timeout = 3 * 1000) {
	 var timestamp = Date.parse(new Date());
	 timestamp = timestamp / 1000;
	 console.log('当前时间戳为：'+timestamp);
 
 }
 
 
 
 
 
 
 
 //#region 固定代码 可以不管他
 // ============================================变量检查============================================ \\
 async function Envs() {
	 if (wwapp) {
		 if (wwapp.indexOf("@") != -1) {
			 wwapp.split("@").forEach((item) => {
				 wwappArr.push(item);
			 });
		 } else {
			 wwappArr.push(wwapp);
		 }
	 } else {
		 console.log(`\n 【${$.name}】：未填写变量 wwapp`)
		 return;
	 }
 
	 return true;
 }
 
 // ============================================发送消息============================================ \\
 async function SendMsg(message) {
	 if (!message)
		 return;
 
	 if (Notify > 0) {
		 if ($.isNode()) {
			 var notify = require('./sendNotify');
			 await notify.sendNotify($.name, message);
		 } else {
			 $.msg(message);
		 }
	 } else {
		 console.log(message);
	 }
 }
 
 /**
  * 随机数生成
  */
 function randomString(e) {
	 e = e || 32;
	 var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		 a = t.length,
		 n = "";
	 for (i = 0; i < e; i++)
		 n += t.charAt(Math.floor(Math.random() * a));
	 return n
 }
 
 /**
  * 随机整数生成
  */
 function randomInt(min, max) {
	 return Math.round(Math.random() * (max - min) + min)
 }
 
 
 /**
   * 获取毫秒时间戳
   */
  function timestampMs(){
	 return new Date().getTime();
  }
 
  /**
   * 获取秒时间戳
   */
  function timestampS(){
	 return Date.parse(new Date())/1000;
  }
 
 /**
  * 获取随机诗词
  */
 function poem(timeout = 3 * 1000) {
	 return new Promise((resolve) => {
		 let url = {
			 url: `https://v1.jinrishici.com/all.json`
		 }
		 $.get(url, async (err, resp, data) => {
			 try {
				 data = JSON.parse(data)
				 log(`${data.content}  \n————《${data.origin}》${data.author}`);
			 } catch (e) {
				 log(e, resp);
			 } finally {
				 resolve()
			 }
		 }, timeout)
	 })
 }
 
 /**
  * 修改配置文件
  */
 function modify() {
 
	 fs.readFile('/ql/data/config/config.sh','utf8',function(err,dataStr){
		 if(err){
			 return log('读取文件失败！'+err)
		 }
		 else {
			 var result = dataStr.replace(/regular/g,string);
			 fs.writeFile('/ql/data/config/config.sh', result, 'utf8', function (err) {
				 if (err) {return log(err);}
			 });
		 }
	 })
 }
 
 /**
  * 获取远程版本
  */
 function getVersion(timeout = 3 * 1000) {
	 return new Promise((resolve) => {
		 let url = {
			 url: `https://raw.gh.fakev.cn/LinYuanovo/scripts/main/dt.js`,
		 }
		 $.get(url, async (err, resp, data) => {
			 try {
				 scriptVersionLatest = data.match(/scriptVersion = "([\d\.]+)"/)[1]
			 } catch (e) {
				 $.logErr(e, resp);
			 } finally {
				 resolve()
			 }
		 }, timeout)
	 })
 }
 
 
 
 
 
 
 
 
 
 
 
 //每日网抑云
 function wyy(timeout = 3 * 1000) {
	 return new Promise((resolve) => {
		 let url = {
			 url: `https://keai.icu/apiwyy/api`
		 }
		 $.get(url, async (err, resp, data) => {
			 try {
				 data = JSON.parse(data)
				 console.log(`\n 【网抑云时间】: ${data.content}  by--${data.music}`);
 
			 } catch (e) {
				 console.logErr(e, resp);
			 } finally {
				 resolve()
			 }
		 }, timeout)
	 })
 }
 
 //#endregion
 
 
 // prettier-ignore   固定代码  不用管他
 function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
 
