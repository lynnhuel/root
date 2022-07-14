小程序:遛遛它
签到随机得红包（非每天都有），自动提现，秒到账。
需要自己填写支付宝账号（脚本里phone后面，多个账号可以提到同一个支付宝账号里）。账号如果多（大于5个）把支付宝实名的名字也填一下（脚本里realName后面）。
添加重写，打开遛遛它签到页面，自动获取变量。
青龙自己抓包https://www.chongpar.cn/member/cp-member-integral/add里面的token，变量名: lltToken
重写:
hostname = www.chongpar.cn
https://www.chongpar.cn/member/cp-member-integral/add url script-request-header llt.js
每天运行一次就可以
