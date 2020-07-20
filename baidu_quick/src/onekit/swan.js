import fetch from '@system.fetch'
import websocketfactory from '@system.websocketfactory'
import request from '@system.request'
import device from '@system.device'
import storage from '@system.storage'
import geolocation from '@system.geolocation'
import vibrator from '@system.vibrator'
import barcode from '@system.barcode'
import clipboard from '@system.clipboard'
import network from '@system.network'
import brightness from '@system.brightness'
import battery from '@system.battery'
import record from '@system.record'
import wifi from '@system.wifi'
import bluetooth from '@system.bluetooth'
import media from '@system.media'
import image from '@system.image'
import audio from '@system.audio'
import file from '@system.file'
import zip from '@system.zip'
import router from '@system.router'
import prompt from '@system.prompt'
import websocket from './object/websocket.js'
import sensor from '@system.sensor'
import push from '@service.push'
//
import thekit from "./thekit.js"

export default class swan {

	// //////////////////getSystemInfo////////////////
	static getSystemInfo(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			}
			quick_object.success = function(quick_res) {
				var swan_res = {
					// 设备像素比
					deviceOrientation: "portrait",
					devicePixelRatio: quick_res.screenDensity,
					version: "7.0.13",
					system: quick_res.osType + " " + quick_res.osVersionName,
					fontSizeSetting: 16,
					SDKVersion: "2.10.4",
					benchmarkLevel: 8,
					albumAuthorized: true,
					cameraAuthorized: true,
					locationAuthorized: true,
					microphoneAuthorized: true,
					notificationAuthorized: true,
					notificationAlertAuthorized: true,
					notificationBadgeAuthorized: true,
					notificationSoundAuthorized: true,
					bluetoothEnabled: false,
					locationEnabled: true,
					wifiEnabled: true,
					safeArea: {
						height: quick_res.screenHeight / quick_res.screenDensity,
						width: quick_res.screenWidth / quick_res.screenDensity,
						bottom: quick_res.screenHeight / quick_res.screenDensity,
						top: 0,
						left: 0,
						right: quick_res.screenWidth / quick_res.screenDensity
					},
					errMsg: "getSystemInfo:ok",

				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "language":
							swan_res[quick_res_key] = quick_res_value + "_" + quick_res.region;
							break;
						case "osType":
							swan_res.platform = quick_res_value;
							break;
						case "screenDensity":
							swan_res.pixelRatio = quick_res_value;
							break;
						case "screenWidth":
							swan_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "screenHeight":
							swan_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "statusBarHeight":
							swan_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "windowWidth":
							swan_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return device.getInfo(quick_object)
	}
	// ////////////////////setStorage///////////////////////
	static setStorage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "data":
						quick_object.value = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "setStorage:ok"
				};

				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return storage.set(quick_object)
	}
	// ////////////////////getStorage///////////////////////
	static getStorage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "setStorage:ok"
				};
				swan_res.data = quick_res;
				if (swan_res.data) {
					if (swan_object.success) {
						swan_object.success(swan_res);
					}
					if (swan_object.complete) {
						swan_object.complete(swan_res);
					}
				} else {
					quick_object.fail(quick_res)
				}
			};

			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getStorage:fail data not found"
				}
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return storage.get(quick_object);
	};
	// ////////////////////clearStorage///////////////////////
	static clearStorage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "clearStorage:ok"
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "clearStorage:fail"
				}
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return storage.clear(quick_object)
	};
	// ////////////////////removeStorage///////////////////////
	static removeStorage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "removeStorage:ok"
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "removeStorage:fail"
				}
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return storage.delete(quick_object)
	};
	// ////////////////////getStorageInfo///////////////////////
	static getStorageInfo(swan_object) {
		swan_object.index = "0";
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				console.log("storage.length " + storage.length);
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			var swan_res = {
				errMsg: "getStorageInfo:ok",
				currentSize: 1,
				keys: ["logs"],
				limitSize: 10240
			};
			for (var i = 0; i < storage.length; i++) {
				quick_object.success = function(quick_res) {
					console.log("quick_res " + quick_res);
					swan_res.keys.push(quick_res);
					if (swan_object.success) {
						swan_object.success(swan_res);
					}
					if (swan_object.complete) {
						swan_object.complete(swan_res);
					}
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getStorageInfo:fail"
				}
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return storage.key(quick_object)
	}

// ////////////////////周期性更新/////////////////////////
	// //////////////////setBackgroundFetchToken////////
	static setBackgroundFetchToken(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////onBackgroundFetchData////////
	static onBackgroundFetchData(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchToken////////
	static getBackgroundFetchToken(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchData////////
	static getBackgroundFetchData(swan_object) {
		console.log("暂不支持")
	}

	// ////////////////////getLocation///////////////////////
	static getLocation(swan_object) {
		var quick_object = {}; // 快应用数据对象
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) { // 百度
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "altitude":
					case "isHighAccuracy":
					case "highAccuracyExpireTime":
					case "type":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value; // 相同的参数 直接赋值
						break;
				}
			}
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getLocation:ok",
					horizontalAccuracy: 30,
					indoorLocationType: -1,
					provider: "network",
					speed: 0,
					steps: 0,
					verticalAccuracy: 0,
					direction: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getLocation:fail auth deny"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
			return geolocation.getLocation(quick_object)
		}
	}

// /////////////////////openLocation//////////////////////
static openLocation(swan_object) {
	if (!swan_object) {
		return
	}
	let swan_latitude = swan_object.latitude;
	let swan_longitude = swan_object.longitude;
	let swan_scale = swan_object.scale;
	let swan_name = swan_object.name;
	let swan_address = swan_object.address;
	let swan_success = swan_object.success;
	let swan_fail = swan_object.fail;
	let swan_complete = swan_object.complete;
	swan_object = null;
	////////////
	let quick_object = {};
	if (swan_latitude) {
		quick_object.latitude = swan_latitude;
	}
	if (swan_longitude) {
		quick_object.longitude = swan_longitude;
	}
	if (swan_scale) {
		quick_object.scale = swan_scale;
	}
	if (swan_name) {
		quick_object.name = swan_name;
	}
	if (swan_address) {
		quick_object.address = swan_address;
	}
	quick_object.success = function (quick_res) {
		var swan_res = {
			errMsg: "openLocation:ok",
		};
		for (var quick_res_key in quick_res) {
			var quick_res_value = quick_res[quick_res_key]
			switch (quick_res_key) {
				default:
					swan_res[quick_res_key] = quick_res_value;
					break;
			}
		}
		if (swan_success) {
			swan_success(swan_res);
		}
		if (swan_complete) {
			swan_complete(swan_res);
		}
	};
	quick_object.fail = function (quick_res) {
		quick_res = {
			errMsg: "openLocation:fail"
		};
		if (swan_fail) {
			swan_fail(quick_res);
		}
		if (swan_complete) {
			swan_complete(quick_res);
		}
	};
	geolocation.openLocation(quick_object)
}
// /////////////////////chooseLocation//////////////////////
static chooseLocation(swan_object) {
	if (!swan_object) {
		return
	}
	let swan_latitude = swan_object.latitude;
	let swan_longitude = swan_object.longitude;
	let swan_success = swan_object.success;
	let swan_fail = swan_object.fail;
	let swan_complete = swan_object.complete;
	swan_object = null;
	/////////////
	let quick_object = {};
	if (swan_latitude) {
		quick_object.latitude = swan_latitude;
	}
	if (swan_longitude) {
		quick_object.longitude = swan_longitude;
	}

	quick_object.success = function (quick_res) {
		var swan_res = {
			errMsg: "chooseLocation:ok",
		};
		for (var quick_res_key in quick_res) {
			var quick_res_value = quick_res[quick_res_key]
			switch (quick_res_key) {
				case "coordType":
					
					break;
				default:
					swan_res[quick_res_key] = quick_res_value;
					break;
			}
		}
		if (swan_success) {
			swan_success(swan_res);
		}
		if (swan_complete) {
			swan_complete(swan_res);
		}
	};
	quick_object.fail = function (quick_res) {
		quick_res = {
			errMsg: "chooseLocation:fail"
		};
		if (swan_fail) {
			swan_fail(quick_res);
		}
		if (swan_complete) {
			swan_complete(quick_res);
		}
	};
	geolocation.chooseLocation(quick_object)
}
// /////////////////////onLocationChange//////////////////////
//  都是回调函数 未完成
static onLocationChange(swan_callback) {
	if (!swan_callback) {
		return
	}
	geolocation.subscribe(swan_callback)
}
// /////////////////////offLocationChange//////////////////////
static offLocationChange(swan_callback) {
	geolocation.unsubscribe()
}
// /////////////////////stopLocationUpdate//////////////////////
static stopLocationUpdate() {
	console.log("暂不支持")
}
// /////////////////////startLocationUpdateBackground//////////////////////
static startLocationUpdateBackground() {
	console.log("暂不支持")
}
// /////////////////////startLocationUpdate//////////////////////
static startLocationUpdate() {
	console.log("暂不支持")
}
// /////////////////////转发///////////////////////////////////////
// /////////////////////updateShareMenu//////////
static updateShareMenu(swan_object) {
	console.log("暂不支持")
}
// /////////////////////showShareMenu///////////
static showShareMenu(swan_object) {
	console.log("暂不支持")
}
// /////////////////////hideShareMenu//////////
static hideShareMenu(swan_object) {
	console.log("暂不支持")
}
// /////////////////////getShareInfo//////////
static getShareInfo(swan_object) {
	console.log("暂不支持")
}


	// ////////////////////vibrateShort///////////////////////
	static vibrateShort(swan_object) {
		swan_object.mode = "short";
		return vibrator.vibrate(swan_object)
	}
	// ////////////////////vibrateLong///////////////////////
	static vibrateLong(swan_object) {
		swan_object.mode = "long";
		return vibrator.vibrate(swan_object)
	}
	// ////////////////////scanCode///////////////////////
	static scanCode(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					case "onlyFromCamera":
					case "scanType":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			}
			quick_object.success = function(quick_res) {
				var swan_res = {
					charSet: "utf-8",
					codeVersion: 5,
					errMsg: "scanCode:ok",
					rawData: "暂不支持"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "type":
							swan_res.scanType = quick_res_value;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "scanCode:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
			quick_object.cancel = function(quick_res) {
				quick_res = {
					errMsg: "scanCode:fail cancel"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			}
		}
		return barcode.scan(quick_object)
	}
	// ////////////////////setClipboardData///////////////////////
	static setClipboardData(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "data":
						quick_object.text = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "setClipboardData:ok"
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "setClipboardData:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return clipboard.set(quick_object)
	}
	// ////////////////////getClipboardData///////////////////////
	static getClipboardData(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getClipboardData:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "text":
							swan_res.data = quick_res_value;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return clipboard.get(quick_object);
	};

// /////////////////////NFC////////////////////////////
	// /////////////////////stopHCE/////////////////////////
	static stopHCE(swan_object) {
		console.log("暂不支持")
	}
	// /////////////////////getHCEState/////////////////////////
	static getHCEState(swan_object) {
		console.log("暂不支持")
	}
	// /////////////////////startHCE/////////////////////////
	static startHCE(swan_object) {
		console.log("暂不支持")
	}
	// /////////////////////sendHCEMessage/////////////////////////
	static sendHCEMessage(swan_object) {
		console.log("暂不支持")
	}
	// /////////////////////onHCEMessage/////////////////////////
	static onHCEMessage(swan_callback) {
		console.log("暂不支持")
	}
	// /////////////////////offHCEMessage/////////////////////////
	static offHCEMessage(swan_callback) {
		console.log("暂不支持")
	}

	// //////////////////////getNetworkType///////////////////////
	static getNetworkType(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getNetworkType:ok"
				};
				console.log("quick_res", quick_res)
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "metered":
							;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return network.getType(quick_object);
	};
	// //////////////////////onNetworkStatusChange///////////////////////
	static onNetworkStatusChange(swan_callback) {
		// console.log("swan_callback",swan_callback);	
		// var quick_object = {};
		// var quick_result = {};

		// quick_object.callback = swan_callback
		// if (swan_callback) {
		// 	var quick_res = await network.subscribe(quick_object);  //	 callback返回的值
		// 	console.log("quick_res",quick_res);	
		// 	for(var quick_res_key in quick_res){   // 对返回的值进行处理
		// 		var quick_res_value = quick_res[quick_res_key];
		// 		switch(quick_result_key){
		// 			case "metered":
		// 				;
		// 			case "type":
		// 				quick_result.networkType = quick_res_value;
		// 				if(quick_res_value === "none"){
		// 					quick_result.isConnected = false;
		// 				}
		// 				else{
		// 					quick_result.isConnected = true;
		// 				}
		// 				break;
		// 			default:
		// 				quick_result[quick_res_key] = quick_res_value;
		// 				break;
		// 		}
		// 	}

		// }
		// console.log("quick_result",quick_result);
		// return quick_res;
		return network.subscribe(swan_callback)
	};
	// //////////////////////offNetworkStatusChange///////////////////////
	static offNetworkStatusChange(swan_callback) {
		return network.unsubscribe(swan_callback)
	}
	// //////////////////////setScreenBrightness///////////////////////
	static setScreenBrightness(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "value":
						quick_object[swan_object_key] = 255 * swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "setScreenBrightness:ok"
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "setScreenBrightness:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return brightness.setValue(quick_object);
	};
	// //////////////////////getScreenBrightness///////////////////////
	static getScreenBrightness(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getScreenBrightness:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "value":
							swan_res[quick_res_key] = quick_res_value / 255;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getScreenBrightness:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return brightness.getValue(quick_object)
	}
	// //////////////////////setKeepScreenOn///////////////////////
	static setKeepScreenOn(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success =  function(quick_res) {
				var swan_res = {
					errMsg: "setKeepScreenOn:ok",
					value: "可通过getScreenBrightness查看",
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "setKeepScreenOn:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
			return brightness.setKeepScreenOn(quick_object)
		}
	};
	// //////////////////////onUserCaptureScreen///////////////////////
	static onUserCaptureScreen(swan_callback) {
		console.log("用户截屏暂不支持");
	};
	// //////////////////////offUserCaptureScreen///////////////////////
	static offUserCaptureScreen(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////getBatteryInfo///////////////////////
	static getBatteryInfo(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getBatteryInfo:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "charging":
							swan_res.isCharging = quick_res_value;
							break;
						case "level":
							swan_res[quick_res_key] = parseInt(quick_res_value * 100) + "";
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getBatteryInfo:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return battery.getStatus(quick_object)
	}

// //////////////////////////电话////////////////////////////////////
	// //////////////////////addPhoneContact///////////////////////
	static addPhoneContact(swan_object) {
		console.log("暂不支持");
	}

	// //////////////////////Recorder录音/////////////////////////////////
	// //////////////////////getRecorderManager///////////////////////
	static getRecorderManager() {
		var RecorderManagerObj = {
			start: (swan_object) => {
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "frameSize":
							case "audioSource":
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "operateRecorder:ok"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									;
									break;
								default:
									swan_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "operateRecorder:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return record.start(quick_object)
			},
			stop: (swan_object) => {
				return record.stop(swan_object);
			},
			onError: (swan_object) => {
				console.log("暂不支持");
			},
			onFrameRecorded: (swan_object) => {
				console.log("暂不支持");
			},
			onInterruptionBegin: (swan_object) => {
				console.log("暂不支持");
			},
			onInterruptionEnd: (swan_object) => {
				console.log("暂不支持");
			},
			onPause: (swan_object) => {
				console.log("暂不支持");
			},
			onResume: (swan_object) => {
				console.log("暂不支持");
			},
			onStart: (swan_object) => {
				console.log("暂不支持");
			},
			onStop: (swan_object) => {
				console.log("暂不支持");
			},
			pause: (swan_object) => {
				console.log("暂不支持");
			},
			resume: (swan_object) => {
				console.log("暂不支持");
			}
		}
		return RecorderManagerObj;
	}
	// //////////////////////startRecord///////////////////////
	static startRecord(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "startRecord:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							swan_res.tempFilePath = quick_res_value;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "startRecord:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return record.start(quick_object)
	};
	// //////////////////////stopRecord///////////////////////
	static stopRecord(swan_object) {
		// 快应用没有参数，没有返回值
		return record.stop(swan_object)
	}

// ///////////////////////音视频合成/////////////////////////
	// /////////////////createMediaContainer////////////
	static createMediaContainer() {
		var MediaContainerObject = {
			addTrack: (track) => {
				console.log("暂不支持")
			},
			destroy: () => {
				console.log("暂不支持")
			},
			export: () => {
				console.log("暂不支持")
			},
			removeTrack: (track) => {
				console.log("暂不支持")
			},
			extractDataSource: (swan_object) => {
				console.log("暂不支持")
			},
		}
		return MediaContainerObject;
	}
	// ///////////////////////视频解码器/////////////////////////
	// /////////////////createVideoDecoder////////////
	static createVideoDecoder() {
		var VideoDecoderObject = {
			getFrameData: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			remove: () => {
				console.log("暂不支持")
			},
			seek: (swan_number) => {
				console.log("暂不支持")
			},
			start: (swan_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return VideoDecoderObject;
	}
	// ///////////////////////画面录制器/////////////////////////
	// /////////////////createMediaRecorder////////////
	static createMediaRecorder() {
		var MediaRecorderObject = {
			destroy: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			requestFrame: (swan_callback) => {
				console.log("暂不支持")
			},
			resume: () => {
				console.log("暂不支持")
			},
			start: (swan_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return MediaRecorderObject;
	}

	// //////////////////////addPhoneContact///////////////////////
	static addPhoneContact(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////connectWifi///////////////////////
	static connectWifi(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////onGetWifiList///////////////////////
	static onGetWifiList(swan_callback) {
		console.log("暂不支持");
	}

	// //////////////////////stopWifi//////////////////////////
	static stopWifi(swan_object) {
		console.log("暂不支持");
	}

	// //////////////////////startWifi//////////////////////////
	static startWifi(swan_object) {
		console.log("暂不支持");
	}

// //////////////////////iBeacon////////////////////////
	// //////////////////////startBeaconDiscovery////////////////////////
	static startBeaconDiscovery(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////stopBeaconDiscovery////////////////////////
	static stopBeaconDiscovery(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconUpdate////////////////////////
	static onBeaconUpdate(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconServiceChange////////////////////////
	static onBeaconServiceChange(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconUpdate////////////////////////
	static offBeaconUpdate(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconServiceChange////////////////////////
	static offBeaconServiceChange(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////getBeacons////////////////////////
	static getBeacons(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////外围设备//////////////////////////
	// ////////////onBLEPeripheralConnectionStateChanged///////////////
	static onBLEPeripheralConnectionStateChanged(swan_callback) {
		console.log("暂不支持");
	}
	// ////////////offBLEPeripheralConnectionStateChanged///////////////
	static offBLEPeripheralConnectionStateChanged(swan_callback) {
		console.log("暂不支持");
	}
	// //////////////////////createBLEPeripheralServer////////////////////////
	static createBLEPeripheralServer(swan_object) {
		console.log("暂不支持");
	}

	// //////////////////////蓝牙//////////////////////////
	// ////////////////////////openBluetoothAdapter/////////////////
	static openBluetoothAdapter(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////closeBluetoothAdapter/////////////////
	static closeBluetoothAdapter(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////getBluetoothAdapterState/////////////////
	static getBluetoothAdapterState(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////onBluetoothAdapterStateChange/////////////////
	static onBluetoothAdapterStateChange(swan_callback) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////startBluetoothDevicesDiscovery/////////////////
	static startBluetoothDevicesDiscovery(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////stopBluetoothDevicesDiscovery/////////////////
	static stopBluetoothDevicesDiscovery(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////getBluetoothDevices/////////////////
	static getBluetoothDevices(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////onBluetoothDeviceFound/////////////////
	static onBluetoothDeviceFound(swan_callback) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////getConnectedBluetoothDevices/////////////////
	static getConnectedBluetoothDevices(swan_object) {
		console.log("百度暂不支持蓝牙");
	}

	// ////////////////////////createBLEConnection/////////////////
	static createBLEConnection(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////closeBLEConnection/////////////////
	static closeBLEConnection(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////getBLEDeviceServices/////////////////
	static getBLEDeviceServices(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////getBLEDeviceCharacteristics/////////////////
	static getBLEDeviceCharacteristics(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////readBLECharacteristicValue/////////////////
	static readBLECharacteristicValue(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////writeBLECharacteristicValue/////////////////
	static writeBLECharacteristicValue(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////notifyBLECharacteristicValueChange/////////////////
	static notifyBLECharacteristicValueChange(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////onBLECharacteristicValueChange/////////////////
	static onBLECharacteristicValueChange(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////onBLEConnectionStateChange/////////////////
	static onBLEConnectionStateChange(swan_object) {
		console.log("百度暂不支持蓝牙");
	}
	// ////////////////////////setBLEMTU/////////////////
	static setBLEMTU(swan_object) {
		console.log("百度暂不支持蓝牙")
	}
	// ////////////////////////offBLEConnectionStateChange/////////////////
	static offBLEConnectionStateChange(swan_callback) {
		console.log("百度暂不支持蓝牙")
	}
	// ////////////////////////offBLECharacteristicValueChange/////////////////
	static offBLECharacteristicValueChange(swan_callback) {
		console.log("百度暂不支持蓝牙")
	}
	// ////////////////////////getBLEDeviceRSSI/////////////////
	static getBLEDeviceRSSI(swan_object) {
		console.log("百度暂不支持蓝牙")
	}
	// ////////////////////////offBluetoothDeviceFound/////////////////
	static offBluetoothDeviceFound(swan_callback) {
		console.log("百度暂不支持蓝牙")
	}
	// ////////////////////////offBluetoothAdapterStateChange/////////////////
	static offBluetoothAdapterStateChange(swan_callback) {
		console.log("百度暂不支持蓝牙")
	}

// ////////////////////////////加速计///////////////////////////////////
	// ////////////////////stopAccelerometer/////////////////////
	static stopAccelerometer(swan_object){
		sensor.unsubscribeAccelerometer()
	}
	// ////////////////////startAccelerometer/////////////////////
	static startAccelerometer(swan_object){
		this.interval = swan_object.interval;
	}
	// ////////////////////onAccelerometerChange/////////////////////
	static onAccelerometerChange(swan_callback){
		if(!swan_callback){
			return
		}
		let quick_object = {};
		let swan_interval = this.interval
		if(swan_interval){
			quick_object = {
				interval:swan_interval,
				callback:swan_callback
			}
		}
		else{
			quick_object = {
				interval:"normal",
				callback:swan_callback
			}
		}
		sensor.subscribeAccelerometer(quick_object)
	}
	// ////////////////////offAccelerometerChange/////////////////////
	static offAccelerometerChange(swan_callback){
		console.log("暂不支持！")
	}


// ///////////////////////////罗盘///////////////////////////////////
	// ////////////////////stopCompass/////////////////////
	static stopCompass(swan_object){
		sensor.unsubscribeCompass()
		this.isCompass = false;
	}
	// ////////////////////startCompass/////////////////////
	static startCompass(swan_object){
		this.isCompass = true;
	}
	// ////////////////////onCompassChange/////////////////////
	static onCompassChange(swan_callback){
		if(this.isCompass == true){
			sensor.unsubscribeCompass(swan_callback)
		}
	}
	// ////////////////////offCompassChange/////////////////////
	static offCompassChange(swan_object){
		this.isCompass = false;
		sensor.unsubscribeCompass()
	}

	// ////////////////////////createCameraContext////////////////////
	static createCameraContext() {
		var CameraContext_object = {
			// ////////////////takePhoto/////////////////////
			takePhoto: (swan_object) => {
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "quality":
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "takePhoto:ok",
							height: 600,
							width: 720
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									swan_res.tempImagePath = quick_res_value;
									break;
								case "name":
									
									break;
								default:
									swan_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "takePhoto:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				media.takePhoto(quick_object);
			},
			// // ////////////////startRecord/////////////////////
			startRecord: (swan_object) => {
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "timeoutCallback":
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "startRecord:ok",
							height: 600,
							width: 720,
							tempThumbPath: "暂不支持"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									swan_res.tempVideoPath = quick_res_value;
									break;
								case "name":
									
									break;
								default:
									swan_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "startRecord:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				media.takeVideo(quick_object);
			},
			// // ////////////////stopRecord/////////////////////
			stopRecord: (swan_object) => {
				console.log("暂不支持")
			},
			// // ////////////////setZoom/////////////////////
			setZoom: (swan_object) => {
				console.log("暂不支持")
			},
			// // ////////////////onCameraFrame/////////////////////
			onCameraFrame: (swan_object) => {
				console.log("暂不支持")
				var CameraFrame_object = {
					// ///////////////start///////////////
					start: (swan_object) => {
						console.log("暂不支持")
					},
					// ///////////////stop////////////////////
					stop: (swan_object) => {
						console.log("暂不支持")
					}
				}
				return CameraFrame_object
			},
		}
		return CameraContext_object
	}
	//  ///////////////////////图片///////////////////////
	// ////////////////////chooseImage////////////////////
	static chooseImage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": 				
					case "fail":
					case "complete":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var swan_res = {
					errMsg: "chooseImage:ok",
					tempFiles: [],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uris":
							swan_res.tempFilePaths = quick_res_value
							break;
						case "files":
							for (var i = 0; i < quick_res_value.length; i++) { 
								swan_res.tempFiles[i] = {};
								for (var quick_res_files_key in quick_res_value[i]) { 
									// console.log(i);
									const quick_res_files_value = quick_res_value[i][quick_res_files_key]
									switch (quick_res_files_key) {
										case "name":
											delete quick_res_value[i][quick_res_files_key]
											break;
										case "uri":
											swan_res.tempFiles[i].path = quick_res_files_value;
											break;
										default:
											break;
									}
								}
								// delete quick_res_value[i].name;
								// swan_res.tempFilePaths.push(quick_res_value[i])
							}
							break;
						    default:
							// swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseImage:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return media.pickImages(quick_object)
	}

	// //////////////////////chooseMessageFile///////////////
	static chooseMessageFile(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "count":
					case "type":
					case "extension":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "chooseMessageFile:ok",
					tempFiles: [{
						time: 1584961531,
						type: "image"
					}],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "name":
							swan_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "size":
							swan_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "uri":
							swan_res.tempFiles[0].path = quick_res_value
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "chooseMessageFile:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return media.pickFile(quick_object);
	}
	// //////////////////////previewImage//////////////////
	static previewImage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "urls":
						quick_object.uris = swan_object_value
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "previewImage:ok",
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "previewImage:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return media.previewImage(quick_object)
	}
	// //////////////////////saveImageToPhotosAlbum/////////////
	static saveImageToPhotosAlbum(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "saveImageToPhotosAlbum:ok",
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "saveImageToPhotosAlbum:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return media.saveToPhotosAlbum(quick_object)
	}
	// //////////////////////compressImage/////////////////
	static compressImage(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						quick_object.uri = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "compressImage:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							swan_res.tempFilePath = quick_res_value;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "compressImage:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return image.compressImage(quick_object)
	}
	// //////////////////////getImageInfo/////////////////
	static getImageInfo(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						quick_object.uri = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				
				console.log("xxxx",quick_res)
				/*var swan_res = {
					errMsg: "getImageInfo:ok",
					orientation: "up",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							swan_res.path = quick_res_value;
							swan_res.type = quick_res_value.split("").reverse().join("").split(".")[0].split("").reverse().join("");
							break;
						case "size":
							
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}*/
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getImageInfo:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return image.getImageInfo(quick_object)
	}
	// //////////////////////视频////////////////////////////////////////
	// //////////////////////chooseVideo/////////////////
	static chooseVideo(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "sourceType":
					case "compressed":
					case "maxDuration":
					case "camera":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "chooseVideo:ok",
					duration: 3,
					height: 720,
					width: 480
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							swan_res.tempFilePath = quick_res_value;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "chooseVideo:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return media.pickVideo(swan_object);
	}
	// //////////////////////saveVideoToPhotosAlbum/////////////////
	static saveVideoToPhotosAlbum(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////////getVideoInfo/////////////////
	static getVideoInfo(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////////compressVideo/////////////////
	static compressVideo(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////////chooseMedia/////////////////
	static chooseMedia(swan_object) {
		console.log("暂不支持")
	}
	// //////////////////////swan.createVideoContext/////////////////
	static createVideoContext(swan_object) {
		var VideoContext = {
			exitFullScreen: () => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (res) => {
				console.log("暂不支持")
			},
			hideStatusBar: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			play: () => {
				console.log("暂不支持")
			},
			playbackRate: (res) => {
				console.log("暂不支持")
			},
			requestFullScreen: (res) => {
				console.log("暂不支持")
			},
			seek: (res) => {
				console.log("暂不支持")
			},
			sendDanmu: (res) => {
				console.log("暂不支持")
			},
			showStatusBar: () => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		};
		return VideoContext
	}
	// ////////////////////音频/////////////////////////////////////////////////////
	// ////////////////////playVoice///////////////////////
	//  快应用没有参数
	static playVoice(swan_object) {
		audio.src = swan_object.filePath;
		return audio.play();
	}
	// ////////////////////stopVoice///////////////////////
	//  快应用没有参数
	static stopVoice(swan_object) {
		return audio.stop();
	}
	// ////////////////////pauseVoice///////////////////////
	//  快应用没有参数
	static pauseVoice(swan_object) {
		return audio.pause();
	}
	// ////////////////////getAvailableAudioSources//////////////
	static getAvailableAudioSources(swan_object) {
		console.log("暂不支持")
	}
	// ///////////////////createAudioContext////////////////////
	static createAudioContext(swan_object) {
		var AudioContext = {
			pause: () => {
				console.log("暂不支持");
			},
			play: () => {
				console.log("暂不支持");
			},
			seek: (Num) => {
				console.log("暂不支持");
			},
			setSrc: (Src) => {
				console.log("暂不支持");
			},
		}
		return AudioContext
	}

	static createInnerAudioContext() {
		var InnerAudioContext = {
			play: () => {
				audio.play();
			},
			pause: () => {
				audio.pause();
			},
			stop: () => {
				audio.stop();
			},
			seek: (num) => {
				console.log("暂不支持");
			},
			destroy: () => {
				console.log("暂不支持");
			},
			offCanplay: (swan_callback) => {
				console.log("暂不支持");
			},
			offEnded: (swan_callback) => {
				console.log("暂不支持");
			},
			offError: (swan_callback) => {
				console.log("暂不支持");
			},
			offPause: (swan_callback) => {
				console.log("暂不支持");
			},
			offPlay: (swan_callback) => {
				console.log("暂不支持");
			},
			offSeeked: (swan_callback) => {
				console.log("暂不支持");
			},
			offSeeking: (swan_callback) => {
				console.log("暂不支持");
			},
			offStop: (swan_callback) => {
				console.log("暂不支持");
			},
			offWaiting: (swan_callback) => {
				console.log("暂不支持");
			},
			onCanplay: (swan_callback) => {
				console.log("暂不支持");
			},
			onEnded: (swan_callback) => {
				console.log("暂不支持");
			},
			onError: (swan_callback) => {
				console.log("暂不支持");
			},
			onPause: (swan_callback) => {
				console.log("暂不支持");
			},
			onPlay: (swan_callback) => {
				console.log("暂不支持");
			},
			onSeeked: (swan_callback) => {
				console.log("暂不支持");
			},
			onSeeking: (swan_callback) => {
				console.log("暂不支持");
			},
			onStop: (swan_callback) => {
				console.log("暂不支持");
			},
			onTimeUpdate: (swan_callback) => {
				console.log("暂不支持");
			},
			onWaiting: (swan_callback) => {
				console.log("暂不支持");
			},

		}
		return InnerAudioContext
	}

// ////////////////////背景音频///////////////////////////////////////////////////
	// quickapp音频播放里面没有参数 没有成功失败的回调
	// ////////////////////////playBackgroundAudio///////////////////
	static playBackgroundAudio(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_dataUrl = swan_object.dataUrl;
		let swan_title = swan_object.title;
		let swan_coverImgUrl = swan_object.coverImgUrl;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		swan_object = null;
		//////////////////////
		if (swan_dataUrl) {
			audio.src = swan_dataUrl;
		}
		if (swan_title) {
			audio.tilte = swan_title;
		}
		if (swan_coverImgUrl) {
			audio.cover = swan_coverImgUrl;
		}
		return audio.play();
	}
	// ////////////////////////stopBackgroundAudio///////////////////
	static stopBackgroundAudio(swan_object) {
		audio.stop();
	}
	// ////////////////////////seekBackgroundAudio///////////////////
	static seekBackgroundAudio(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_position = swan_object.position;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		if (swan_position) {
			audio.currentTime = swan_position
		}
		return;
	}
	// ////////////////////////pauseBackgroundAudio///////////////////
	static pauseBackgroundAudio(swan_object) {
		audio.pause();
	}
	// ////////////////////////onBackgroundAudioStop///////////////////
	static onBackgroundAudioStop(swan_callback) {
		audio.onstop = swan_callback;
	}
	// ////////////////////////onBackgroundAudioPlay///////////////////
	static onBackgroundAudioPlay(swan_callback) {
		audio.onplay = swan_callback;
	}
	// ////////////////////////onBackgroundAudioPause///////////////////
	static onBackgroundAudioPause(swan_callback) {
		audio.onpause = swan_callback;
	}
	// ////////////////////////getBackgroundAudioPlayerState///////////////////
	static getBackgroundAudioPlayerState(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		var quick_object = {};
		swan_object = null;
		//////////////////////////
		quick_object.success = function (quick_res) {
			var swan_res = {
				errMsg: "getBackgroundAudioPlayerState:ok",
				duration: "暂不支持",
				downloadPercent: "暂不支持",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "state": // 快应用
						if (quick_res_value == "play") {
							swan_res.status = 1;
						}
						if (quick_res_value == "pause") {
							swan_res.status = 0;
						}
						if (quick_res_value == "stop") {
							swan_res.status = 2;
						}
						break;
					case "src":   // 快应用
						swan_res.dataUrl = quick_res_value;// 百度
						break;
					case "currentTime":
						swan_res.currentPosition = quick_res_value;
						break;
					case "autoplay":
						;
						break;
					case "loop":
						;
						break;
					case "volume":
						;
						break;
					case "muted":
						;
						break;
					case "notificationVisible":
						;
						break;
					default:
						swan_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (swan_success) {
				swan_success(swan_res);
			}
			if (swan_complete) {
				swan_complete(swan_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "getBackgroundAudioPlayerState:fail"
			}
			if (swan_fail) {
				swan_fail(quick_res);
			}
			if (swan_complete) {
				swan_complete(quick_res);
			}
		};
		return audio.getPlayState(quick_object);
	}
	// ////////////////////////getBackgroundAudioManager///////////////////
	static getBackgroundAudioManager() {
		var BackgroundAudioManager = {
			// swan 属性 需要实时更新 当前属性
			duration: audio.duration,
			currentTime: audio.currentTime,
			paused: "暂不支持",
			buffered: "暂不支持",
			// swan 方法
			stop: function () {
				audio.stop()
			},
			play: function () {
				audio.src = this.src;
				audio.title = this.title;
				audio.currentTime = this.startTime;
				audio.artist = this.singer;
				audio.cover = this.coverImgUrl;
				audio.play();
			},
			seek: function (swan_number) {
				audio.currentTime = swan_number;
			},
			pause: function () {
				audio.pause();
			},
			onWaiting: function () {
				console.log("暂不支持");
			},
			onTimeUpdate: function (swan_callback) {
				audio.ontimeupdate = swan_callback;
			},
			onStop: function (swan_callback) {
				audio.onstop = swan_callback;
			},
			onSeeking: function (swan_callback) {
				console.log("暂不支持");
			},
			onSeeked: function (swan_callback) {
				console.log("暂不支持");
			},
			// ios
			onPrev: function () {
				console.log("暂不支持");
			},
			onPlay: function (swan_callback) {
				audio.onplay = swan_callback;
			},
			onPause: function (swan_callback) {
				audio.onpause = swan_callback;
			},
			// ios
			onNext: function (swan_callback) {
				console.log("暂不支持");
			},
			onError: function (swan_callback) {
				audio.onerror = swan_callback;
			},
			onEnded: function (swan_callback) {
				audio.onended = swan_callback;
			},
			onCanplay: function (swan_callback) {
				console.log("暂不支持");
			}
		}
		return BackgroundAudioManager;
	}

// ////////////////////实时音视频///////////////////////////////////////////////////
	// ///////////////createLivePusherContext//////////////////
	static createLivePusherContext() {
		var LivePusherContextObject = {
			pause: (swan_object) => {
				console.log("暂不支持")
			},
			pauseBGM: (swan_object) => {
				console.log("暂不支持")
			},
			playBGM: (swan_object) => {
				console.log("暂不支持")
			},
			resume: (swan_object) => {
				console.log("暂不支持")
			},
			resumeBGM: (swan_object) => {
				console.log("暂不支持")
			},
			setBGMVolume: (swan_object) => {
				console.log("暂不支持")
			},
			setMICVolume: (swan_object) => {
				console.log("暂不支持")
			},
			snapshot: (swan_object) => {
				console.log("暂不支持")
			},
			start: (swan_object) => {
				console.log("暂不支持")
			},
			startPreview: (swan_object) => {
				console.log("暂不支持")
			},
			stop: (swan_object) => {
				console.log("暂不支持")
			},
			stopBGM: (swan_object) => {
				console.log("暂不支持")
			},
			stopPreview: (swan_object) => {
				console.log("暂不支持")
			},
			switchCamera: (swan_object) => {
				console.log("暂不支持")
			},
			toggleTorch: (swan_object) => {
				console.log("暂不支持")
			},
		}
		return LivePusherContextObject;
	}
	// ///////////////createLivePlayerContext//////////////////
	static createLivePlayerContext() {
		var LivePlayerContextObject = {
			exitFullScreen: (swan_object) => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (swan_object) => {
				console.log("暂不支持")
			},
			mute: (swan_object) => {
				console.log("暂不支持")
			},
			pause: (swan_object) => {
				console.log("暂不支持")
			},
			play: (swan_object) => {
				console.log("暂不支持")
			},
			requestFullScreen: (swan_object) => {
				console.log("暂不支持")
			},
			resume: (swan_object) => {
				console.log("暂不支持")
			},
			snapshot: (swan_object) => {
				console.log("暂不支持")
			},
			stop: (swan_object) => {
				console.log("暂不支持")
			},
		}
		return LivePlayerContextObject;
	}

	// ////////////////////////////基础///////////////////////////////////////////
	// //////////////////////canIUse///////////////////////
	static canIUse(swan_object) {
		console.log("暂不支持");
	}
	// ///////////////////base64ToArrayBuffer//////////////////
	static base64ToArrayBuffer(base64String) {
		var Base64Binary = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvswanyz0123456789+/=",

			/* will return a  Uint8Array type */
			decodeArrayBuffer: function(input) {
				var bytes = (input.length / 4) * 3;
				var ab = new ArrayBuffer(bytes);
				this.decode(input, ab);
				return ab;
			},

			removePaddingChars: function(input) {
				var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
				if (lkey == 64) {
					return input.substring(0, input.length - 1);
				}
				return input;
			},

			decode: function(input, arrayBuffer) {
				//get last chars to see if are valid
				input = this.removePaddingChars(input);
				input = this.removePaddingChars(input);

				var bytes = parseInt((input.length / 4) * 3, 10);

				var uarray;
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;
				var j = 0;

				if (arrayBuffer) {
					uarray = new Uint8Array(arrayBuffer);
				} else {
					uarray = new Uint8Array(bytes);
				}
				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				for (i = 0; i < bytes; i += 3) {
					//get the 3 octects in 4 ascii chars
					enc1 = this._keyStr.indexOf(input.charAt(j++));
					enc2 = this._keyStr.indexOf(input.charAt(j++));
					enc3 = this._keyStr.indexOf(input.charAt(j++));
					enc4 = this._keyStr.indexOf(input.charAt(j++));
					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;
					uarray[i] = chr1;
					if (enc3 != 64) uarray[i + 1] = chr2;
					if (enc4 != 64) uarray[i + 2] = chr3;
				}
				return uarray;
			}
		}
		var byteArray = Base64Binary.decodeArrayBuffer(base64String);
		return byteArray;
	}

	// ///////////////////arrayBufferToBase64//////////////////
	static arrayBufferToBase64(buffer) {
		var base64 = ''
		var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvswanyz0123456789+/'
		var bytes = new Uint8Array(buffer)
		var byteLength = bytes.byteLength;
		var byteRemainder = byteLength % 3
		var mainLength = byteLength - byteRemainder
		var a, b, c, d
		var chunk
		for (var i = 0; i < mainLength; i = i + 3) {
			chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
			a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
			b = (chunk & 258048) >> 12 // 258048 = (2^6 - 1) << 12
			c = (chunk & 4032) >> 6 // 4032 = (2^6 - 1) << 6
			d = chunk & 63 // 63 = 2^6 - 1
			base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
		}
		if (byteRemainder == 1) {
			chunk = bytes[mainLength]
			a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;
			b = (chunk & 3) << 4 // 3 = 2^2 - 1;
			base64 += encodings[a] + encodings[b] + '=='
		} else if (byteRemainder == 2) {
			chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
			a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;
			b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;
			c = (chunk & 15) << 2 // 15 = 2^4 - 1;
			base64 += encodings[a] + encodings[b] + encodings[c] + '='
		}
		return base64
	}
	// ////////////////getUpdateManager////////////////////////
	static getUpdateManager() {
		var UpdateManager = {
			applyUpdate: () => {
				console.log("暂不支持");
			},
			onCheckForUpdate: (swan_callback) => {
				console.log("暂不支持");
			},
			onUpdateFailed: (swan_callback) => {
				console.log("暂不支持");
			},
			onUpdateReady: (swan_callback) => {
				console.log("暂不支持");
			},
		}
		return UpdateManager
	}
	// //////////////////////更新////////////////////////
	static getUpdateManager(){
		var updateManager = {
			applyUpdate:()=>{
				console.log("暂不支持")
			},
			onCheckForUpdate:()=>{
				console.log("暂不支持")
			},
			onUpdateFailed:()=>{
				console.log("暂不支持")
			},
			onUpdateReady:()=>{
				console.log("暂不支持")
			},
		}
		return updateManager;
	}
	// //////////////////////小程序////////////////////////
	// //////////////////////生命周期////////////////////////
	
	// //////////////////getLaunchOptionsSync////////////
	static getLaunchOptionsSync(){
		console.log("暂不支持")
	}
	static getEnterOptionsSync(){
		console.log("暂不支持")
	}
	
	// //////////////////////应用级事件////////////////////////
	// //////////////////////onUnhandledRejection////////////////////////
	static onUnhandledRejection(){
		console.log("暂不支持")
	}
	// //////////////////////onThemeChange////////////////////////
	static onThemeChange(){
		console.log("暂不支持")
	}
	// //////////////////////onPageNotFound////////////////////////
	static onPageNotFound(){
		console.log("暂不支持")
	}
	// //////////////////////onError////////////////////////
	static onError(){
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionEnd////////////////////////
	static onAudioInterruptionEnd(){
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionBegin////////////////////////
	static onAudioInterruptionBegin(){
		console.log("暂不支持")
	}
	// //////////////////////onAppShow////////////////////////
	static onAppShow(){
		console.log("暂不支持")
	}
	// //////////////////////onAppHide////////////////////////
	static onAppHide(){
		console.log("暂不支持")
	}
	// //////////////////////offUnhandledRejection////////////////////////
	static offUnhandledRejection(){
		console.log("暂不支持")
	}
	// //////////////////////offThemeChange////////////////////////
	static offThemeChange(){
		console.log("暂不支持")
	}
	// //////////////////////offPageNotFound////////////////////////
	static offPageNotFound(){
		console.log("暂不支持")
	}
	// //////////////////////offError////////////////////////
	static offError(){
		console.log("暂不支持")
	}
	// //////////////////////offAudioInterruptionEnd////////////////////////
	static offAudioInterruptionEnd(){
		console.log("暂不支持")
	}
	// //////////////////////offAppShow////////////////////////
	static offAppShow(){
		console.log("暂不支持")
	}
	// //////////////////////offAppHide////////////////////////
	static offAppHide(){
		console.log("暂不支持")
	}
	
	// //////////////////////调式////////////////////////
	// //////////////////////setEnableDebug////////////////////////
	static setEnableDebug(){
		console.log("暂不支持")
	}
	// //////////////////////getRealtimeLogManager////////////////////////
	static getRealtimeLogManager(){
		var RealtimeLogManager = {
			addFilterMsg:()=>{
				console.log("暂不支持")
			},
			error:()=>{
				console.log("暂不支持")
			},
			in:()=>{
				console.log("暂不支持")
			},
			info:()=>{
				console.log("暂不支持")
			},
			setFilterMsg:()=>{
				console.log("暂不支持")
			},
			warn:()=>{
				console.log("暂不支持")
			},
		}
		return RealtimeLogManager;
	}
	// //////////////////////getLogManager////////////////////////
	static getLogManager(){
		var LogManager = {
			debug:()=>{
				console.log("暂不支持")
			},
			info:()=>{
				console.log("暂不支持")
			},
			log:()=>{
				console.log("暂不支持")
			},
			warn:()=>{
				console.log("暂不支持")
			},
		}
		return LogManager;
	}
// ///////////console.group快应用没有///////////////
// //////////////////////定时器////////////////////////


	///////////////////////////路由/////////////////////////////////////////////
	// //////////////////////switchTab////////////////////////
	static switchTab(swan_object){
		router.clear();
		router.replace({uri:"onekit/ui/tabs",params:{url:swan_object.url}})
	}
	// //////////////////////reLaunch////////////////////////
	//   swan和快应用 路由的传参方式不一样
	static reLaunch(swan_object){
		router.clear();
		var quick_object = {};
		// 没有参数时
		if(swan_object.url.indexOf('?') != -1){
			quick_object.uri = swan_object.url;
		}
		// 有参数时
		else{
			quick_object.uri = swan_object.split("?")[0];
			quick_object.params = {}
			var arr = swan_object.split("?")[1].split("&")
			for(let i = 0;i<arr.length;i++){
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.replace(quick_object);
	}
	
	// //////////////////////redirectTo//////////////////////////
	static redirectTo(swan_object){
		var quick_object = {};
		// 没有参数时
		if(swan_object.url.indexOf('?') != -1){
			quick_object.uri = swan_object.url;
		}
		// 有参数时
		else{
			quick_object.uri = swan_object.split("?")[0];
			quick_object.params = {}
			var arr = swan_object.split("?")[1].split("&")
			for(let i = 0;i<arr.length;i++){
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.replace(quick_object);
	}
	// //////////////////////navigateTo//////////////////////////
	
	static navigateTo(swan_object) {  
		var quick_object = {};
		// 没有参数时
		var url_params = swan_object.url.split("?");
		var url = url_params[0];
		quick_object.uri = thekit.fixurl(swan.url ,url);
		//
		if(url_params.length>1) {
			quick_object.params = {}
			var arr = url_params[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.push(quick_object);
	}
	// //////////////////////navigateBack////////////////////////
	static navigateBack(swan_object){
		var quick_object = {};
		var page = router.getState();	
		var stacks = router.getPages();
		if(swan_object.delta){
			var deltaIndex = page.index - swan_object.delta
		}
		else{
			var deltaIndex = page.index - 1
		}
		quick_object.path = stacks[deltaIndex].path;
		router.back(quick_object);
	}
	// ///////////////////////EventChannel//////////////////////
	
	// ////////////////////////界面////////////////////////////////////////////
	
// ////////////////////////交互//////////////////////////////
	// ////////////////////////showToast//////////////////////////////
	static showToast(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_title = swan_object.title;   // 必填项 现实的文本
		let swan_icon = swan_object.icon;    // 图片
		let swan_image = swan_object.image;
		let swan_duration = swan_object.duration || 0 // 间隔时长
		let swan_mask = swan_object.mask;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;

		let quick_object = {
			message: swan_title,
			duration: swan_duration
		}
		swan_object = null;
		/////////////////////
		return prompt.showToast(quick_object);

	}
	// ////////////////////////showModal//////////////////////////////
	static showModal(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_title = swan_object.title; // 
		let swan_content = swan_object.content;    //
		let swan_showCancel = swan_object.showCancel;
		let swan_cancelText = swan_object.cancelText || '取消';
		let swan_cancelColor = swan_object.cancelColor || "#000000"
		let swan_confirmText = swan_object.confirmText || '确定';
		let swan_confirmColor = swan_object.confirmColor || "#576B95";
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		let quick_object = {
			buttons: [{
				text: swan_confirmText,
				color: swan_confirmColor
			}, {
				text: swan_cancelText,
				color: swan_cancelColor
			}]
		}
		swan_object = null;
		/////////////////////

		if (swan_title) {
			quick_object.title = swan_title
		}
		if (swan_content) {
			quick_object.message = swan_content
		}
		if (swan_showCancel == false) {
			quick_object.buttons.splice(1, 1);
		}

		quick_object.success = function (quick_res) {
			var swan_res = {
				errMsg: "showModal:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						if (quick_res_value == "0") {
							swan_res.confirm = true;
							swan_res.cancel = false;
						}
						if (quick_res_value == "1") {
							swan_res.confirm = false;
							swan_res.cancel = true;
						}// 微信
						break;
					default:
						swan_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (swan_success) {
				swan_success(swan_res);
			}
			if (swan_complete) {
				swan_complete(swan_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (swan_fail) {
				swan_fail(quick_res);
			}
			if (swan_complete) {
				swan_complete(quick_res);
			}
		};

		return prompt.showDialog(quick_object)
	}
	// ////////////////////////showActionSheet//////////////////////////
	static showActionSheet(swan_object) {
		if (!swan_object) {
			return
		}
		let swan_itemList = swan_object.itemList;
		let swan_itemColor = swan_object.itemColor || "#000000";
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		let quick_object = {}
		swan_object = null;
		/////////////////
		if (swan_itemList) {
			if (swan_itemList.length > 6) {
				var quick_res1 = { errMsg: "showActionSheet:fail parameter error: itemList should not be large than 6" }
				if (swan_fail) {
					swan_fail(quick_res1);
				}
				if (swan_complete) {
					swan_complete(quick_res1);
				}
				return;
			}
			else {
				quick_object.itemList = swan_itemList;
			}
		}
		if (swan_itemColor) {
			quick_object.itemColor = swan_itemColor
		}
		quick_object.success = function (quick_res) {
			var swan_res = {
				errMsg: "showActionSheet:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						swan_res.tapIndex = quick_res_value; // 微信
						break;
					default:
						swan_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (swan_success) {
				swan_success(swan_res);
			}
			if (swan_complete) {
				swan_complete(swan_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (swan_fail) {
				swan_fail(quick_res);
			}
			if (swan_complete) {
				swan_complete(quick_res);
			}
		};
		return prompt.showContextMenu(quick_object)
	}
	// ////////////////////////showLoading//////////////////////////////
	static showLoading(swan_object) {
		prompt.showToast({
			message:"加载中...",
			duration:1
		})
	}
	// ////////////////////////hideLoading//////////////////////////////
	static hideLoading(swan_object) {
		// console.log("暂不支持");
	}
	// ////////////////////////hideToast//////////////////////////////
	static hideToast(swan_object) {
		// console.log("暂不支持");
	}
	// /////////////////////////导航栏////////////////////////////
	// ///////////////////setNavigationBarTitle//////////////////
	// 未完成
	static setNavigationBarTitle(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////showNavigationBarLoading///////////////
	static showNavigationBarLoading(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////setNavigationBarColor////////////////
	static setNavigationBarColor(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////hideNavigationBarLoading///////////////
	static hideNavigationBarLoading(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////hideHomeButton///////////////
	static hideHomeButton(swan_object) {
		console.log("暂不支持");
	}

	// /////////////////////////背景//////////////////////////////
	// /////////////////setBackgroundTextStyle///////////////
	static setBackgroundTextStyle(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////setBackgroundColor///////////////
	static setBackgroundColor(swan_object) {
		console.log("暂不支持");
	}

	// ////////////////////////Tab Bar///////////////////////////
	// /////////////////showTabBarRedDot///////////////
	static showTabBarRedDot(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////showTabBar///////////////
	static showTabBar(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarStyle///////////////
	static setTabBarStyle(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarItem///////////////
	static setTabBarItem(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarBadge///////////////
	static setTabBarBadge(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////dpoveTabBarBadge///////////////
	static dpoveTabBarBadge(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBarRedDot///////////////
	static hideTabBarRedDot(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBar///////////////
	static hideTabBar(swan_object) {
		console.log("暂不支持");
	}

	// ////////////////////////字体//////////////////////////////
	// /////////////////loadFontFace///////////////
	static loadFontFace(swan_object) {
		console.log("暂不支持");
	}
	// ////////////////////////下拉刷新///////////////////////////
	// /////////////////stopPullDownRefresh///////////////
	static stopPullDownRefresh(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////startPullDownRefresh///////////////
	static startPullDownRefresh(swan_object) {
		console.log("暂不支持");
	}
	// ////////////////////////滚动//////////////////////////////
	static pageScrollTo(swan_object) {
		console.log("暂不支持");
	}
	// ////////////////////////动画//////////////////////////////
	static createAnimation(swan_object) {
		console.log("暂不支持")
	}
	// ////////////////////////置顶//////////////////////////////
	// /////////////////setTopBarText///////////////
	static setTopBarText(swan_object) {
		console.log("暂不支持");
	}
	// ////////////////////////自定义组件/////////////////////////
	// /////////////////nextTick///////////////
	static nextTick(swan_callback) {
		setTimeout(swan_callback, 0);
	}
	// ////////////////////////菜单//////////////////////////////
	// ////////getMenuButtonBoundingClientRect////////////
	static getMenuButtonBoundingClientRect() {
		let getMenuButtonBoundingClientRectObject = {
			bottom: 58,
			height: 32,
			left: 317,
			right: 404,
			top: 26,
			width: 87
		}
		return getMenuButtonBoundingClientRectObject;
	}
	// ////////////////////////窗口//////////////////////////////
	// /////////////////setWindowSize///////////////
	static setWindowSize(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////onWindowResize///////////////
	static onWindowResize(swan_callback) {
		console.log("暂不支持");
	}
	// /////////////////offWindowResize///////////////
	static offWindowResize(swan_callback) {
		console.log("暂不支持");
	}
	// ////////////////////////键盘//////////////////////////////
	// /////////////////onKeyboardHeightChange///////////////
	static onKeyboardHeightChange(swan_callback) {
		console.log("暂不支持");
	}
	// /////////////////offKeyboardHeightChange///////////////
	static offKeyboardHeightChange(swan_callback) {
		console.log("暂不支持");
	}
	// /////////////////hideKeyboard///////////////
	static hideKeyboard(swan_object) {
		console.log("暂不支持");
	}
	// /////////////////getSelectedTextRange///////////////
	static getSelectedTextRange(swan_object) {
		console.log("暂不支持");
	}

	// ////////////////////////网络////////////////////////////////////////////
	// ///////////////////request///////////////////////
	static request(swan_object) {
		var quick_object = {}; // 快应用数据对象
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) { // 微信
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "timeout":
						break;
					case "dataType":
						break;
					case "enableHttp2":
						break;
					case "enableQuic":
						break;
					case "enableCache":
						break;
					default:
						quick_object[swan_object_key] = swan_object_value; // 相同的参数 直接赋值
						break;
				}
			}
			quick_object.success = function(quick_res) {
				var swan_res = {
					profile: {
						peerIP: "192.168.22.150",
						port: 80,
						receivedBytedCount: 395,
						redirectEnd: 0,
						redirectStart: 0,
						requestEnd: 1587028378001,
						requestStart: 1587028377982,
						responseEnd: 1587028378001,
						responseStart: 1587028377998
					},
					errMsg: "request:ok",
					abort:()=>{
						console.log("暂不支持");
					}
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key];
					switch (quick_res_key) {
						case "code": // 快应用
							swan_res.statusCode = quick_res_value; // 微信
							break;
						case "headers":
							var quick_res_headers = quick_res_value;
							var swan_res_headers = {};
							for (var quick_res_headers_key in quick_res_headers) { // 循环header里面的属性 对cookies做处理
								var quick_res_headers_value = quick_res_headers[quick_res_headers_key];
								switch (quick_res_headers_key) {
									case "Set-Cookie":
										var quick_res_headers_cookies;
										if (quick_res_headers_value) {
											quick_res_headers_cookies = quick_res_headers_value.join(",");
											swan_res.cookies = quick_res_headers_value;
										} else {
											quick_res_headers_cookies = "";
										}
										swan_res_headers[quick_res_headers_key] = quick_res_headers_cookies;
										break;
									default:
										swan_res_headers[quick_res_headers_key] = quick_res_headers_value;
										break;
								}
							};
							swan_res.header = swan_res_headers;
							break;
						default:
							swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "request:fail invalid url"
					
				}
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
	
		}
		return fetch.fetch(quick_object); // 最后输出快应用的数据对象，但是输出swan的格式
		
	}
	// ////////////////////////////requestTask/////////////////////////////
	
	
	///////////////////////////文件/////////////////////////////////////////////

	// //////////////////////getSavedFileInfo//////////////////////
	static getSavedFileInfo(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "getSavedFileInfo:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							
							break;
						case "type":
							
							break;
						case "subFiles":
							
							break;
						case "length":
							swan_res.size = quick_res_value;
							break;
						case "lastModifiedTime":
							swan_res.createTime = quick_res_value;
							break;
						default:
						//	swan_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "getSavedFileInfo:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return file.get(quick_object)
	}
	// //////////////////////saveFileToDisk//////////////////////
	static saveFileToDisk(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////saveFile//////////////////////
	static saveFile(swan_object) {
		console.log("暂不支持保存到本地");
	}
	// //////////////////////removeSavedFile//////////////////////
	static removeSavedFile(swan_object) {
		var quick_object = {};
		if (swan_object) {
			for (var swan_object_key in swan_object) {
				var swan_object_value = swan_object[swan_object_key];
				switch (swan_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "filePath":
						quick_object.uri = swan_object_value;
						break;
					default:
						quick_object[swan_object_key] = swan_object_value;
						break;
				}
			};
			quick_object.success = function(quick_res) {
				var swan_res = {
					errMsg: "removeSavedFile:ok",
				};
				if (swan_object.success) {
					swan_object.success(swan_res);
				}
				if (swan_object.complete) {
					swan_object.complete(swan_res);
				}
			};
			quick_object.fail = function(quick_res) {
				quick_res = {
					errMsg: "removeSavedFile:fail"
				};
				if (swan_object.fail) {
					swan_object.fail(quick_res);
				}
				if (swan_object.complete) {
					swan_object.complete(quick_res);
				}
			};
		}
		return file.delete(quick_object)
	}
	// //////////////////////openDocument//////////////////////
	static openDocument(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////getSavedFileList//////////////////////
	static getSavedFileList(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileInfo//////////////////////
	static getFileInfo(swan_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileSystemManager//////////////////
	static getFileSystemManager() {
		var FileSystemManager = {
			access: (swan_object) => {
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "path":
								quick_object.uri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "access:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "access:fail no such file or directory , access " + qucikUri
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.access(quick_object)
			},
			//  /////////////  1.text 和data 类型不一样  2.fail失败的不一样 ////////////////
			appendFile: (swan_object) => {
				var quick_object = {
					append: true
				};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = swan_object_value;
								break;
							case "data":
								quick_object.text = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "appendFile:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.writeText(quick_object);
			},
			copyFile: (swan_object) => {
				var quick_object = {
					append: true
				};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "srcPath":
								quick_object.srcUri = swan_object_value;
								break;
							case "destPath":
								quick_object.dstUri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "copyFile:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.copy(quick_object)
			},
			getFileInfo: (swan_object) => {
				console.log("暂不支持")
			},
			getSavedFileList: (swan_object) => {
				console.log("暂不支持")
			},
			mkdir: (swan_object) => {
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "mkdir:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "mkdir:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.mkdir(quick_object)
			},
			readdir: (swan_object) => {
				console.log("暂不支持")
			},
			readFile: (swan_object) => {
				if (swan_object.encoding != "") {
					var quick_object = {};
					if (swan_object) {
						for (var swan_object_key in swan_object) {
							var swan_object_value = swan_object[swan_object_key];
							switch (swan_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = swan_object_value;
									break;
								case "position":
									break;
								case "length":
									break;
								default:
									quick_object[swan_object_key] = swan_object_value;
									break;
							}
						};
						quick_object.success = function(quick_res) {
							var swan_res = {
								errMsg: "readFile:ok",
							};
							if (swan_object.success) {
								swan_object.success(swan_res);
							}
							if (swan_object.complete) {
								swan_object.complete(swan_res);
							}
						};
						quick_object.fail = function(quick_res) {
							quick_res = {
								errMsg: "readFile:fail"
							};
							if (swan_object.fail) {
								swan_object.fail(quick_res);
							}
							if (swan_object.complete) {
								swan_object.complete(quick_res);
							}
						};
					}
					return file.readText(quick_object)
				} else {
					var quick_object2 = {};
					if (swan_object) {
						for (var swan_object_key in swan_object) {
							var swan_object_value = swan_object[swan_object_key];
							switch (swan_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object2.uri = swan_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[swan_object_key] = swan_object_value;
									break;
							}
						};
						quick_object2.success = function(quick_res) {
							var swan_res = {
								errMsg: "readArrayBuffer:ok",
							};
							if (swan_object.success) {
								swan_object.success(swan_res);
							}
							if (swan_object.complete) {
								swan_object.complete(swan_res);
							}
						};
						quick_object2.fail = function(quick_res) {
							quick_res = {
								errMsg: "readArrayBuffer:fail"
							};
							if (swan_object.fail) {
								swan_object.fail(quick_res);
							}
							if (swan_object.complete) {
								swan_object.complete(quick_res);
							}
						};
					}
					return file.readArrayBuffer(quick_object2)
				}
			},
			removeSavedFile:(swan_object)=>{
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "removeSavedFile:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "removeSavedFile:fail file not exist"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			rename:(swan_object)=>{
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "oldPath":
								quick_object.srcUri = swan_object_value;
								break;
							case "newPath":
								quick_object.dstUri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "rename:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "rename:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.move(quick_object)
			},
			rmdir:(swan_object)=>{
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "rmdir:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "rmdir:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.rmdir(quick_object)
			},
			saveFile: (swan_object) => {
				console.log("暂不支持")
			},
			stat:(swan_object)=>{
				console.log("暂不支持")
			},
			unlink:(swan_object)=>{
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "unlink:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "unlink:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			unzip:(swan_object)=>{
				var quick_object = {};
				if (swan_object) {
					for (var swan_object_key in swan_object) {
						var swan_object_value = swan_object[swan_object_key];
						switch (swan_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "zipFilePath":
								quick_object.srcUri = swan_object_value;
								break;
							case "targetPath":
								quick_object.dstUri = swan_object_value;
								break;
							default:
								quick_object[swan_object_key] = swan_object_value;
								break;
						}
					};
					quick_object.success = function(quick_res) {
						var swan_res = {
							errMsg: "unzip:ok",
						};
						if (swan_object.success) {
							swan_object.success(swan_res);
						}
						if (swan_object.complete) {
							swan_object.complete(swan_res);
						}
					};
					quick_object.fail = function(quick_res) {
						quick_res = {
							errMsg: "unzip:fail"
						};
						if (swan_object.fail) {
							swan_object.fail(quick_res);
						}
						if (swan_object.complete) {
							swan_object.complete(quick_res);
						}
					};
				}
				return zip.decompress(quick_object)
			},
			writeFile: (swan_object) => {
				if ( typeof(swan_object.data) == "string") {
					var quick_object = {};
					if (swan_object) {
						for (var swan_object_key in swan_object) {
							var swan_object_value = swan_object[swan_object_key];
							switch (swan_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = swan_object_value;
									break;
								case "data":
									quick_object.text = swan_object_value;
									break;
								default:
									quick_object[swan_object_key] = swan_object_value;
									break;
							}
						};
						quick_object.success = function(quick_res) {
							var swan_res = {
								errMsg: "writeFile:ok",
							};
							if (swan_object.success) {
								swan_object.success(swan_res);
							}
							if (swan_object.complete) {
								swan_object.complete(swan_res);
							}
						};
						quick_object.fail = function(quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (swan_object.fail) {
								swan_object.fail(quick_res);
							}
							if (swan_object.complete) {
								swan_object.complete(quick_res);
							}
						};
					}
					return file.writeText(quick_object)
				} else {
					var quick_object2 = {};
					if (swan_object) {
						for (var swan_object_key in swan_object) {
							var swan_object_value = swan_object[swan_object_key];
							switch (swan_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "data":
									quick_object2.buffer = swan_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[swan_object_key] = swan_object_value;
									break;
							}
						};
						quick_object2.success = function(quick_res) {
							var swan_res = {
								errMsg: "writeFile:ok",
							};
							if (swan_object.success) {
								swan_object.success(swan_res);
							}
							if (swan_object.complete) {
								swan_object.complete(swan_res);
							}
						};
						quick_object2.fail = function(quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (swan_object.fail) {
								swan_object.fail(quick_res);
							}
							if (swan_object.complete) {
								swan_object.complete(quick_res);
							}
						};
					}
					return file.writeArrayBuffer(quick_object2)
				}
			}
		}
		return FileSystemManager;
	}
	// ////////////////////////////上传/////////////////////////////
	// ///////////////////////////uploadFile///////////////////////
	static uploadFile(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_url = swan_object.url;
		let swan_filePath = swan_object.filePath;
		let swan_name = swan_object.name;
		let swan_header = swan_object.header;
		let swan_timeout = swan_object.timeout;
		let swan_formData = swan_object.formData;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		var quick_object = {
			files: [{}],
		}; // 快应用数据对象
		swan_object = null
		//////////////////////
		if (swan_url) {
			quick_object.url = swan_url;
		}
		if (swan_filePath) {
			quick_object.files[0].uri = swan_filePath;
		}
		if (swan_header) {
			quick_object.header = swan_header;
		}
		if (swan_name) {
			quick_object.files[0].name = swan_name;
		}
		if (swan_formData) {
			quick_object.data = [];
			for (let key in swan_formData) {
				let quick_data_obj = {
					name: key,
					value: swan_formData[key]
				}
				quick_object.data.push(quick_data_obj)
			}
		}
		quick_object.success = function (quick_res) {
			var swan_res = {
				errMsg: "uploadFile:ok",
			};
			// for (var quick_res_key in quick_res) {
			// 	var quick_res_value = quick_res[quick_res_key];
			// 	switch (quick_res_key) {
			// 		case "code": // 快应用
			// 			swan_res.statusCode = quick_res_value; // 百度
			// 			break;
			// 		case "headers":
			// 			;
			// 			break;
			// 		default:
			// 			swan_res[quick_res_key] = quick_res_value;
			// 			break;
			// 	}
			// }
			if (swan_success) {
				swan_success(swan_res);
			}
			if (swan_complete) {
				swan_complete(swan_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "uploadFile:fail"
			}
			if (swan_fail) {
				swan_fail(quick_res);
			}
			if (swan_complete) {
				swan_complete(quick_res);
			}
		};
		return request.upload(quick_object); // 最后输出快应用的数据对象，但是输出swan的格式
	}
	// ////////////////////////////UploadTask/////////////////////

	// ////////////////////////////下载/////////////////////////////
	// ////////////////////////downloadFile////////////////
	static downloadFile(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_url = swan_object.url;
		let swan_filePath = swan_object.filePath;
		let swan_header = swan_object.header;
		let swan_timeout = swan_object.timeout;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		swan_object = null;

		var quick_object = {
		};
		//////////////////////
		if (swan_url) {
			quick_object.url = swan_url;
		}
		if (swan_header) {
			quick_object.header = swan_header;
		}
		quick_object.success = function (quick_res) {
			var swan_res = {
				errMsg: "downloadFile:ok", tempFilePath: "",
				dataLength: 147,
				profile: {
					SSLconnectionEnd: 1589529382326,
					SSLconnectionStart: 1589529382270,
					connectEnd: 1589529382326,
					connectStart: 1589529382261,
					domainLookUpEnd: 1589529382261,
					domainLookUpStart: 1589529382253,
					downstreamThroughputKbpsEstimate: 1961,
					estimate_nettype: 5,
					fetchStart: 1589529382253,
					httpRttEstimate: 58,
					peerIP: "118.24.23.53",
					port: 443,
					receivedBytedCount: 350,
					redirectEnd: 0,
					redirectStart: 0,
					requestEnd: 1589529382404,
					requestStart: 1589529382253,
					responseEnd: 1589529382404,
					responseStart: 1589529382384,
					rtt: 58,
					sendBytesCount: 481,
					socketReused: false,
					throughputKbps: 0,
					transportRttEstimate: 6
				},
				header: {
					"Accept-Ranges": "bytes",
					"Content- Length": "147",
					"Content - Type": "application/zip",
					"Date": "Fri, 15 May 2020 07:56:24 GMT",
					"ETag": "W/'47 - 1589420853796'",
					"Last - Modified": "Thu, 14 May 2020 01:47:33 GMT",
				},
				cookie: [],
				statusCode: 200
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "token": // 快应用
						
						break;
					default:
						swan_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (swan_success) {
				swan_success(swan_res);
			}
			if (swan_complete) {
				swan_complete(swan_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "downloadFile:fail",
			}
			if (swan_fail) {
				swan_fail(quick_res);
			}
			if (swan_complete) {
				swan_complete(quick_res);
			}
		};
		return request.download(quick_object); // 最后输出快应用的数据对象，但是输出swan的格式
	}
	// ////////////////////////DownloadTask////////////////
	// ////////////////////////////WebSocket/////////////////////////////
	// ////////////////////////connectSocket////////////////
	static connectSocket(swan_object) {
		if (!swan_object) {
			return;
		}
		let swan_url = swan_object.url;
		let swan_header = swan_object.header;
		let swan_protocols = swan_object.protocols;
		let swan_tcpNoDelay = swan_object.tcpNoDelay || false;
		let swan_perMessageDeflate = swan_object.perMessageDeflate || false;
		let swan_timeout = swan_object.timeout;
		let swan_success = swan_object.success;
		let swan_fail = swan_object.fail;
		let swan_complete = swan_object.complete;
		var quick_object = {};
		swan_object = null;
		//////////////////////
		if (swan_url) {
			quick_object.url = swan_url;
		}
		if (swan_header) {
			quick_object.header = swan_header;
		}
		if (swan_protocols) {
			quick_object.protocols = swan_protocols;
		}
		// quick app没有success fail 

		let quick_ws = websocketfactory.create(quick_object);

		let socket = new websocket(quick_ws);  //创建一个websocket实例
		this.socketGlo = socket;

		// let socketArr = [];
		// let socketArrLength = socketArr.length
		// if(socketArrLength > 5){
		// 	console.log("微信小程序最多可以同时存在 5 个 WebSocket 连接")
		// 	return;
		// }
		// socketArr.push(socket);
		// return socketArr[socketArrLength - 1];
		return socket;
	}
	// /////////////////////onSocketOpen////////////////////
	static onSocketOpen(swan_callback) {
		this.socketGlo.onOpen(swan_callback);
	}
	// /////////////////////sendSocketMessage////////////////
	static sendSocketMessage(swan_object) {
		this.socketGlo.send(swan_object)
	}
	// /////////////////////onSocketMessage////////////////
	static onSocketMessage(swan_callback) {
		this.socketGlo.onMessage(swan_callback)
	}
	// /////////////////////onSocketError////////////////
	static onSocketError(swan_callback) {
		this.socketGlo.onError(swan_callback)
	}
	// /////////////////////onSocketClose////////////////
	static onSocketClose(swan_callback) {
		this.socketGlo.onClose(swan_callback)
	}
	// /////////////////////closeSocket////////////////
	static closeSocket(swan_object) {
		this.socketGlo.close(swan_object)
	}
	
}
