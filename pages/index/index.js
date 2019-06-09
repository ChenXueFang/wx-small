//index.js
//获取应用实例
const app = getApp()

Page({
      data: {
        // 轮播
        zanNum: 22,
        movies: [{
            url: '../../img/lun2.png'
          },
          {
            url: '../../img/lun1.png'
          },
          {
            url: '../../img/lun3.png'
          }
        ],
        // 一条
        talkItems: [{
            id: 0,
            imageurl: '../../img/user2.png',
            zanurl: '../../img/good1.png',
            name: 'jayge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 1,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name: 'jayge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 2,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name: 'jayge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 3,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name: 'jayge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
        ],
        // 切换
        talkItems0: [{
            id: 0,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name0: 'jayge AR3MICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 1,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name0: 'jayge AR2MICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 2,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name0: 'jayge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 3,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name0: 'jay6ge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
        ],
        talkItems1: [{
            id: 0,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name1: 'jayg5e ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 1,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name1: 'ja4yge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 2,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name1: 'ja6yge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 3,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name1: 'jayg3e ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
        ],
        talkItems2: [{
            id: 0,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name2: 'jay6ge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 1,
            imageurl: '../../img/user2.png',
            zanurl: '../../img/good1.png',
            name2: 'jay7ge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 2,
            imageurl: '../../img/user3.png',
            zanurl: '../../img/good1.png',
            name2: 'jayg8e ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
          {
            id: 3,
            imageurl: '../../img/user1.png',
            zanurl: '../../img/good1.png',
            name2: 'ja7yge ARMICY',
            time: '12/08',
            words: '#土味情话#什么是土味情话 【必读】'
          },
        ],
        // 点赞
        stars: [0], //星星个数
        normalSrc: '../../img/good1.png',
        selectedSrc: '../../img/good2.png',
        halfSrc: '../../img/good2.png',
        key: 0,
      },
      onLoad: function(options) {

      },
      //下拉刷新
      onPullDownRefresh: function() {
        //模拟加载
        setInterval(function() {
          // complete
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
        }, 1000);
      },
      //加载更多
      onReachBottom: function() {
        console.log('加载更多')
        setTimeout(() => {
          this.setData({
            isHideLoadMore: true,
            talkItems: [{
                id: 0,
                imageurl: '../../img/user2.png',
                name: 'jayge ARMICY',
                time: '12/08',
                words: '#土味情话#什么是土味情话 【必读】'
              },
              {
                id: 1,
                imageurl: '../../img/user2.png',
                name: 'jayge ARMICY',
                time: '12/08',
                words: '#土味情话#什么是土味情话 【必读】'
              },
              {
                id: 2,
                imageurl: '../../img/user2.png',
                name: 'jayge ARMICY',
                time: '12/08',
                words: '#土味情话#什么是土味情话 【必读】'
              },
              {
                id: 3,
                imageurl: '../../img/user2.png',
                name: 'jayge ARMICY',
                time: '12/08',
                words: '#土味情话#什么是土味情话 【必读】'
              }
            ]
          })
        }, 1000)
      },
      // tab切换
      tabqiehuan: function(e) {
        //参数e里面的index是一个字符串,直接调用不能出现效果,需要转换为数据类型
        console.log(e);
        //parseInt() 函数可解析一个字符串，并返回一个整数。
        let idx = parseInt(e.currentTarget.dataset.index);
        //再讲这里的idx的值传到curIndex里面去从而进行tab切换
        this.setData({
          curIndex: idx
        })
      },
      //点赞
      
})