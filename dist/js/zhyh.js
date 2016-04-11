$(function () {
    var router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });	

    // grid
    var home = {
        url: '/',
        className: 'home',
        render: function () {
            return $('#tpl_home').html();
        }
    };

    //查看处方价格
    var zcfjg = {
        url: '/zcfjg',
        className: 'zcfjg',
        render: function () {
            return $('#zhyh_zcfjg').html();
        }
    };


    //自助录方
    var zzlf = {
        url: '/zzlf',
        className: 'zzlf',
        render: function () {
            return $('#zhyh_zzlf').html();
        }
    };

    //选择收货地址
    var cAddr = {
        url: '/cAddr',
        className: 'cAddr',
        render: function () {
            return $('#zhyh_cAddr').html();
        }
    };

    //修改收货地址
    var uAddr = {
        url: '/uAddr',
        className: 'uAddr',
        render: function () {
            return $('#zhyh_uAddr').html();
        }
    };

    //新增收货地址
    var nAddr = {
        url: '/nAddr',
        className: 'nAddr',
        render: function () {
            return $('#zhyh_nAddr').html();
        }
    };

    //我的资料
    var mInfo = {
        url: '/mInfo',
        className: 'mInfo',
        render: function () {
            return $('#zhyh_mInfo').html();
        }
    };



    //我的优惠券
    var mCoupon = {
        url: '/mCoupon',
        className: 'mCoupon',
        render: function () {
            return $('#zhyh_mCoupon').html();
        }
    };

    //拍照录方
     var gPhotoa = {
        url: '/gPhotoa',
        className: 'gPhotoa',
        render: function () {
            return $('#zhyh_gPhotoa').html();
        }
    };   

    //订单详细 zhyh_oDetail
    var oDetail = {
        url: '/oDetail',
        className: 'oDetail',
        render: function () {
            return $('#zhyh_oDetail').html();
        }
    };

    //药材详细 zhyh_yDetail
    var yDetail = {
        url: '/yDetail',
        className: 'yDetail',
        render: function () {
            return $('#zhyh_yDetail').html();
        }
    };
    //我的订单 zhyh_mOrder
    var mOrder = {
        url: '/mOrder',
        className: 'mOrder',
        render: function () {
            return $('#zhyh_mOrder').html();
        }
    };
    //提交成功提示 zhyh_mMsg
    var mMsg = {
        url: '/mMsg',
        className: 'mMsg',
        render: function () {
            return $('#zhyh_mMsg').html();
        }
    };
    //订单进度 zhyh_oPro
    var oPro = {
        url: '/oPro',
        className: 'oPro',
        render: function () {
            return $('#zhyh_oPro').html();
        }
    };
    //查看中药价格 zhyh_yPrice
    var yPrice = {
        url: '/yPrice',
        className: 'yPrice',
        render: function () {
            return $('#zhyh_yPrice').html();
        }
    };
    //查看拍照示例 zhyh_pEg
    var pEg = {
        url: '/pEg',
        className: 'pEg',
        render: function () {
            return $('#zhyh_pEg').html();
        }
    };


    		//自助录方-判断
		  var max = 200;
		  var listMax = 41;
		  $('#container').on('input', '#zh_comment_textarea',function(){
		     var text = $(this).val();
		     var len = text.length;
		    
		     $('#zh_comment_count').text(len);
		    
		     if(len > max){
		       $(this).closest('.weui_cell').addClass('weui_cell_warn');
		     }
		     else{
		       $(this).closest('.weui_cell').removeClass('weui_cell_warn');
		     }
		     
		  });

		  $('#container').on('click','#default_list .weui_yc_opr',function (){
		  	//alert(111);
		  	var delBtn = $(this).parent();
		    $.weui.confirm('确认删除?', function (){
		        //console.log('确认删除');
		        delBtn.remove();
		        listlen--;
		    }, function (){
		        //console.log('不删除');
		    });
		  });

		  var listlen = $('.zh_yc_list').length;
		  

			$('#container').on('click', '.addBtn', function (e) {
			     	 $('.addBtn').show();
					  $("#default_list").append($('<div class="weui_cells weui_cells_form zh_yc_list m0"><a href="javascript:;" class="weui_yc_opr"><i class="weui_icon_cancel"></i></a><div class="weui_cell"><div class="weui_cell_hd"><label class="weui_label_dd mr15">药材</label></div><div class="weui_cell_bd weui_cell_primary"><input class="weui_input" type="text" placeholder="如：黄芪"/></div></div><div class="weui_cell"><div class="weui_cell_hd"><label class="weui_label_dd mr15">单价</label></div><div class="weui_cell_bd weui_cell_primary"><input class="weui_input" type="number" disabled placeholder="输入药材名称后显示"/></div></div><div class="weui_cell"><div class="weui_cell_hd"><label class="weui_label_dd mr15">数量</label></div><div class="weui_cell_bd weui_cell_primary"><input class="weui_input" type="number" placeholder="如：10"/></div></div><div class="weui_cell"><div class="weui_cell_hd"><label class="weui_label_dd mr15">副数</label></div><div class="weui_cell_bd weui_cell_primary"><input class="weui_input" type="number" placeholder="如：1（剂/副）"/></div></div><div class="weui_cell weui_cell_select weui_select_after"><div class="weui_cell_hd">用法</div><div class="weui_cell_bd weui_cell_primary"><select class="weui_select"><option value="1">常规</option><option value="2">冲泡</option><option value="3">先煎</option></select></div></div></div>'));  	
					    
					    listlen++;

					    if(listlen > listMax){
					       $('.addBtn').hide();
					    }
			});	
	      

		  	$('#container').on('click', '#submitBtn', function () {
		  			var reg =/^([\u4e00-\u9fa5]{2,4}|[a-zA-Z]{2,8})$/;
					var v = $(".uname").val();


					if( v == ''){
		                $('#uEmpty').show();
		                setTimeout(function () {
		                    $('#uEmpty').hide();
		                }, 2000);
					}
					else{
						if(!reg.test(v)){
			                $('#uType').show();
			                setTimeout(function () {
			                    $('#uType').hide();
			                }, 2000);
						}
					}
					var pNum =/(1[3-9]\d{9}$)/;
					var uPNum = $(".uphone").val();

					if(uPNum == ''){
		                $('#tEmpty').show();
		                setTimeout(function () {
		                    $('#tEmpty').hide();
		                }, 2000);
					}else{
						if(!pNum.test(uPNum)){
			                $('#tType').show();
			                setTimeout(function () {
			                    $('#tType').hide();
			                }, 2000);
						}
					};					

    		});

    //search area
    $('#container').on('focus', '#search_input', function () {
        var $weuiSearchBar = $('#search_bar');
        $weuiSearchBar.addClass('weui_search_focusing');
    }).on('blur', '#search_input', function () {
        var $weuiSearchBar = $('#search_bar');
        $weuiSearchBar.removeClass('weui_search_focusing');
        if ($(this).val()) {
            $('#search_text').hide();
        } else {
            $('#search_text').show();
        }
    }).on('input', '#search_input', function () {
        var $searchShow = $("#search_show");
        if ($(this).val()) {
            $searchShow.show();
        } else {
            $searchShow.hide();
        }
    }).on('touchend', '#search_cancel', function () {
        $("#search_show").hide();
        $('#search_input').val('');
    }).on('touchend', '#search_clear', function () {
        $("#search_show").hide();
        $('#search_input').val('');
    });  


    //choose address
	$('.container').on('click','.zh-address .weui_panel_access',function(){
		$('.zh-address .weui_panel_access').removeClass('address-current');
		$(this).addClass('address-current');
	});      


    router.push(home)
    	  .push(zcfjg)
    	  .push(zzlf)
    	  .push(cAddr)
    	  .push(uAddr)
    	  .push(nAddr)
			.push(mInfo)
			.push(mCoupon)
			.push(gPhotoa)
			.push(oDetail)
			.push(yDetail)
			.push(mOrder)
			.push(mMsg)
			.push(oPro)
			.push(yPrice)
			.push(pEg)    	  
          .setDefault('/')
          .init();


     // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
    // 相关 issue: https://github.com/weui/weui/issues/15
    // 解决方法:
    // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
    // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }       

});