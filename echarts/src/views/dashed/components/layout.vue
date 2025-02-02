<template>
    <canvas id="canvas"> </canvas>
    <div class="contetnbox">
      <div class="head">
        <div class="publicdata">
          <div class="publicshow">
            <div class="title">公开数据展示</div>
            <div class="maincontents">
              <div class="part1">
                <div class="box">
                  <span class="qty">20</span>
                  <span class="text">党务</span>
                </div>
                <div class="box">政务</div>
                <div class="box">财务</div>
              </div>
              <div class="part2">
                <div class="box">党务</div>
                <div class="box">政务</div>
                <div class="box">财务</div>
                <div class="box">财务</div>
              </div>
            </div>
          </div>
          <div class="datashow">
            <div class="title">添加信息数据展示</div>
            <div class="addinfo" ref="addinfo"></div>
          </div>
        </div>
        <div class="maindata">
          <div class="title">
            <div class="themetitle">
              <div class="desc">Web</div>
              <div class="mainbgc">-服务大数据可视化-</div>
              <div class="desa">codefish</div>
            </div>
            <div class="showqty">
              <div class="desc">累计服务人数：</div>
              <div class="qtybox">
                <div class="box box1 boxa">1</div>
                <div class="box box2 boxa">2</div>
                <div class="box box3 boxa">3</div>
                <div class="box box4 boxa">4</div>
                <div class="box box5 boxa">5</div>
              </div>
              <div class="desc">再接再厉</div>
            </div>
          </div>
          <div class="titledata">
            <div class="firstdata">
              <div class="title">接送服务公开数量占比</div>
              <div class="piemap" ref="titlePie1"></div>
            </div>
            <div class="seconddata">
              <div class="title">上门服务公开数量占比</div>
              <div class="piemap" ref="titlePie2"></div>
            </div>
          </div>
        </div>
        <div class="otherdata">
          <div class="publicshow">
            <div class="title">其他数据展示</div>
            <div class="maincontents">
              <div class="part1">
                <div class="box">
                  <span class="qty">20</span>
                  <span class="text">党务</span>
                </div>
                <div class="box">政务</div>
                <div class="box">财务</div>
              </div>
              <div class="part2">
                <div class="box">党务</div>
                <div class="box">政务</div>
                <div class="box">财务</div>
                <div class="box">财务</div>
              </div>
            </div>
          </div>
          <div class="datashow">
            <div class="title">数据类型占比</div>
            <div class="addinfo" ref="addinfoPie"></div>
          </div>
        </div>
      </div>
      <div class="maincontent">
        <div class="partfive">
          <div class="qtyshow qtyshow1" ref="qtyshow">777</div>
          <div class="qtyshow">685</div>
          <div class="qtyshow">352</div>
          <div class="qtyshow">124</div>
          <div class="qtyshow">563</div>
        </div>
        <div class="tablepart">
          <div class="scrollpart">
            <div class="title">好吃指南</div>
            <div class="contentscroll">
              <ul class="list">
                <li v-for="i in 4" :key="i">
                  <span>{{ i }}</span>
                  <span>明治芝士葡萄</span>
                  <span>芝士柚子</span>
                  <span>2022/09/02</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="scrollpart">
            <div class="title">好吃指南</div>
            <div class="contentscroll contentscroll1">
              <ul class="list">
                <li v-for="i in 4" :key="i">
                  <span>{{ i }}</span>
                  <span>蒙牛草莓芝士</span>
                  <span>￥50</span>
                  <span>2022/09/02</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="scrollpart">
            <div class="title">好吃指南</div>
            <div class="contentscroll">
              <ul class="list">
                <li v-for="i in 4" :key="i">
                  <span>{{ i }}</span>
                  <span>八喜覆盆子芝士</span>
                  <span>￥49</span>
                  <span>2022/09/02</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomcontent">
        <div class="part part1">
          <div class="title">主要关注路线指南</div>
          <div class="mainCancar" ref="mainCancar"></div>
        </div>
        <div class="part part2">
          <div class="leftpart">
            <div class="title">次要路线指南</div>
            <div class="barone" ref="barone"></div>
          </div>
          <div class="rightpart">
            <div class="title">开销指南</div>
            <div class="barone" ref="bartwo"></div>
          </div>
        </div>
        <div class="part part3">
          <div class="title">其他指南</div>
          <div class="barone" ref="barthree"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import "../../../public/tools/jquery.min.js";
  // import "../../tools/jcarousellite";
  // import "../../tools/dataScoll";
  import { ref } from "vue";
  export default {
    name: "one",
    setup() {
      let timer = new ref(true);
      return {
        timer,
      };
    },
    mounted() {
      this.loadfirstdata();
      this.loadseconddata();
      this.loadAddInfo();
      this.loadAddInfoPie();
      this.loadMainCancar();
      this.loadBottomLeftMid();
      this.loadBottomRightMid();
      this.loadBottomRight();
      this.loadNumberAnimate(); //添加数字滚动类名
      this.numScroll(); //数字滚动触发
      this.loadContentscroll(); //内容滚动
      this.loadcanvas();
    },
    beforeUnmount() {
      this.timer = false;
    },
    methods: {
      // 接送服务公开数量占比
      loadfirstdata() {
        let mynode = this.$refs.titlePie1;
        let myChar = this.$echarts.init(mynode);
        let options = {
          legend: {
            show: true,
            right: "13%",
            top: "50%",
            orient: "vertical",
            align: "right",
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              // name: "Access From",
              type: "pie",
              radius: ["50%", "90%"],
              legendHoverLink: true,
              left: "-25%",
              hoverAnimation: false,
              roseType: "radius",
              data: [
                {
                  value: 80,
                  name: "奶茶",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#C7384B",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 60,
                  name: "麻辣烫",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#CACFF7",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 70,
                  name: "烧烤",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#C79F2E",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  // name: "未使用",
                  value: 100,
                  itemStyle: {
                    color: "rgb(255, 255, 255,.3)",
                  },
                },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      //接送服务公开数量占比
      loadseconddata() {
        let mynode = this.$refs.titlePie2;
        let myChar = this.$echarts.init(mynode);
        let options = {
          legend: {
            show: true,
            right: "3%",
            top: "50%",
            orient: "vertical",
            align: "right",
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              // name: "Access From",
              type: "pie",
              radius: ["50%", "80%"],
              // center: ['30%', '40%'],
              legendHoverLink: true,
              left: "-25%",
              hoverAnimation: false,
              // roseType:"radius",
              data: [
                {
                  value: 80,
                  name: "奶茶",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#C7384B",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 60,
                  name: "麻辣烫",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#CACFF7",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 90,
                  name: "铁板烧",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#F7E3DF",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 100,
                  name: "烤冷面",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#80C742",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 70,
                  name: "烧烤",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#C79F2E",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  // name: "未使用",
                  value: 100,
                  itemStyle: {
                    color: "rgb(255, 255, 255,.3)",
                  },
                },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              radius: ["30%", "35%"],
              // center: ["25%", "50%"],
              type: "pie",
              left: "-25%",
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              animation: false,
              tooltip: {
                show: false,
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    color: "rgba(250,250,250,0.3)",
                  },
                },
              ],
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      //添加信息数据展示
      loadAddInfo() {
        let mynode = this.$refs.addinfo;
        let myChar = this.$echarts.init(mynode);
        let options = {
          title: {
            //   text: "World Population",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            show: false,
          },
          xAxis: {
            type: "value",
            inverse: true,
            axisTick: {
              show: false,
            },
            boundaryGap: [0, 0.01],
            xAxisPointer: false,
            splitLine: false,
            minorSplitLine: {
              show: false,
            },
          },
          grid: {
            show: false,
          },
          yAxis: {
            nameLocation: "middle",
            labelLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              interval: 1,
              margin: -20,
              showMinLabel: true,
              fontSIze: 8,
              scale: 0.8,
            },
            splitNumber: 0,
            type: "category",
            data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
          },
          series: [
            {
              name: "2011",
              type: "bar",
              data: [18, 27, 24, 10, 13, 60],
              itemStyle: {
                color: "rgb(101, 246, 242)",
              },
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      loadAddInfoPie() {
        let mynode = this.$refs.addinfoPie;
        let myChar = this.$echarts.init(mynode);
        let options = {
          legend: {
            show: true,
            width: "50%",
            height: "100%",
            top: "0%",
            itemWidth: "8",
            itemHeight: "8",
            pageButtonItemGap: 1,
            itemGap: 0,
            right: "10%",
            orient: "vertical",
            align: "right",
            textStyle: {
              color: "#fff",
            },
            itemStyle: {
              borderWidth: 0,
            },
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              // name: "Access From",
              type: "pie",
              // radius: ["50%", "90%"],
              legendHoverLink: true,
              left: "-50%",
              hoverAnimation: false,
              roseType: "radius",
              data: [
                {
                  value: 80,
                  name: "奶茶",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#C7384B",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 60,
                  name: "麻辣烫",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#CACFF7",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 70,
                  name: "烧烤",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#8FF792",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 70,
                  name: "德克士",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "rgba(253, 145, 51)",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 84,
                  name: "keaiduo",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#EDED8A",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
                {
                  value: 59,
                  name: "华莱士",
                  itemStyle: {
                    normal: {
                      // color: "#395fff",
                      borderColor: "#fff",
                      color: "#D5F78F",
                      label: {
                        show: false,
                      },
                      labelLine: {
                        //   show: false,
                      },
                    },
                  },
                },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      //加载左下
      loadMainCancar() {
        let mynode = this.$refs.mainCancar;
        let myChar = this.$echarts.init(mynode);
        let options = {
          title: {
            //   text: "Basic Radar Chart",
          },
          legend: {
            show: false,
          },
          radar: {
            //   shape: 'circle',
            radius: 50,
            nameGap: 0,
            indicator: [
              { name: "Sales", max: 6500 },
              { name: "Administration", max: 16000 },
              { name: "Information Technology", max: 30000 },
              { name: "Customer Support", max: 38000 },
              { name: "Development", max: 52000 },
              { name: "Marketing", max: 25000 },
            ],
          },
          series: [
            {
              name: "Budget vs spending",
              type: "radar",
              areaStyle: {
                color: "#f40",
              },
              data: [
                //   {
                //     value: [4200, 3000, 20000, 35000, 50000, 18000],
                //     name: "Allocated Budget",
                //   },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000],
                  name: "Actual Spending",
                },
              ],
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      loadBottomLeftMid() {
        let mynode = this.$refs.barone;
        let myChar = this.$echarts.init(mynode);
        let options = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          tooltip: {
            show: true,
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: false,
            },
          },
          grid: {
            height: "86%",
            bottom: "2%",
          },
          legend: {
            show: true,
            right: "1%",
            top: "2%",
            textStyle: {
              color: "#fff",
            },
            // orient:"vertical"
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar",
              name: "text1",
              itemStyle: {
                color: "#F06A62",
              },
            },
            {
              data: [100, 150, 140, 40, 140, 170, 110],
              type: "bar",
              name: "text2",
              itemStyle: {
                color: "#8FEBF7",
              },
            },
            {
              data: [130, 130, 120, 160, 90, 100, 120],
              type: "bar",
              name: "text3",
              itemStyle: {
                color: "#9A5DF0",
              },
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      loadBottomRightMid() {
        let mynode = this.$refs.bartwo;
        let myChar = this.$echarts.init(mynode);
        let options = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          tooltip: {
            show: true,
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: false,
            },
          },
          grid: {
            height: "86%",
            bottom: "2%",
          },
          legend: {
            show: true,
            right: "1%",
            top: "2%",
            textStyle: {
              color: "#fff",
            },
            // orient:"vertical"
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar",
              name: "text1",
            },
            {
              data: [100, 150, 140, 40, 140, 170, 110],
              type: "bar",
              name: "text2",
            },
            {
              data: [130, 130, 120, 160, 90, 100, 120],
              type: "bar",
              name: "text3",
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      loadBottomRight() {
        let mynode = this.$refs.barthree;
        let myChar = this.$echarts.init(mynode);
        let options = {
          xAxis: {
            type: "value",
            splitLine: {
              show: false,
            },
          },
          tooltip: {
            show: true,
          },
          yAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          grid: {
            height: "76%",
            bottom: "2%",
          },
          legend: {
            show: true,
            right: "1%",
            top: "2%",
            textStyle: {
              color: "#fff",
            },
            //   orient:"vertical"
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar",
              name: "text1",
              stack: "total",
              itemStyle: {
                color: "#F0ACE0",
              },
            },
            {
              data: [100, 150, 140, 40, 140, 170, 110],
              type: "bar",
              name: "text2",
              stack: "total",
              itemStyle: {
                color: "#C683F7",
              },
            },
            {
              data: [130, 130, 120, 160, 90, 100, 120],
              type: "bar",
              name: "text3",
              stack: "total",
              itemStyle: {
                color: "#83C0F7",
              },
            },
          ],
        };
        myChar.setOption(options);
        window.resize = function () {
          myChar.resize();
        };
      },
      numScroll() {
        if (this.timer) {
          setInterval(() => {
            $(".counter-value").each(function () {
              $(this)
                .prop("Counter", 0)
                .animate(
                  {
                    Counter: $(this).text(),
                  },
                  {
                    duration: 2500,
                    easing: "swing",
                    step: function (now) {
                      $(this).text(now.toFixed(0));
                    },
                  }
                );
            });
          }, 5000);
        }
      },
      loadNumberAnimate() {
        $(".qtyshow").addClass("counter-value").text("304");
        $(".boxa").addClass("counter-value").text(`11`);
      },
      loadContentscroll() {
        $(".contentscroll").jCarouselLite({
          vertical: true,
          hoverPause: true,
          visible: 4,
          scroll: 1,
          circular: true,
          auto: 1000,
          speed: 500,
        });
      },
      loadcanvas() {
        class Circle {
          //创建对象
          //以一个圆为对象
          //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
          //this.r是创建圆的半径，参数越大半径越大
          //this._mx,this._my是移动的距离，参数越大移动
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = Math.random() * 10;
            this._mx = Math.random();
            this._my = Math.random();
          }
  
          //canvas 画圆和画直线
          //画圆就是正常的用canvas画一个圆
          //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
          drawCircle(ctx) {
            ctx.beginPath();
            //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
            ctx.arc(this.x, this.y, this.r, 0, 360);
            ctx.closePath();
            ctx.fillStyle = "rgba(204, 204, 204, 0.3)";
            ctx.fill();
          }
  
          drawLine(ctx, _circle) {
            let dx = this.x - _circle.x;
            let dy = this.y - _circle.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d < 150) {
              ctx.beginPath();
              //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
              ctx.moveTo(this.x, this.y); //起始点
              ctx.lineTo(_circle.x, _circle.y); //终点
              ctx.closePath();
              ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";
              ctx.stroke();
            }
          }
  
          // 圆圈移动
          // 圆圈移动的距离必须在屏幕范围内
          move(w, h) {
            this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
            this._my = this.y < h && this.y > 0 ? this._my : -this._my;
            this.x += this._mx / 2;
            this.y += this._my / 2;
          }
        }
  
        //鼠标点画圆闪烁变动
        class currentCirle extends Circle {
          constructor(x, y) {
            super(x, y);
          }
  
          drawCircle(ctx) {
            ctx.beginPath();
            //注释内容为鼠标焦点的地方圆圈半径变化
            //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
            this.r = 8;
            ctx.arc(this.x, this.y, this.r, 0, 360);
            ctx.closePath();
            //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
            ctx.fillStyle = "rgba(255, 77, 54, 0.6)";
            ctx.fill();
          }
        }
  
        //更新页面用requestAnimationFrame替代setTimeout
        window.requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;
  
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let w = (canvas.width = canvas.offsetWidth);
        let h = (canvas.height = canvas.offsetHeight);
        let circles = [];
        let current_circle = new currentCirle(0, 0);
  
        let draw = function () {
          ctx.clearRect(0, 0, w, h);
          for (let i = 0; i < circles.length; i++) {
            circles[i].move(w, h);
            circles[i].drawCircle(ctx);
            for (j = i + 1; j < circles.length; j++) {
              circles[i].drawLine(ctx, circles[j]);
            }
          }
          if (current_circle.x) {
            current_circle.drawCircle(ctx);
            for (var k = 1; k < circles.length; k++) {
              current_circle.drawLine(ctx, circles[k]);
            }
          }
          requestAnimationFrame(draw);
        };
  
        let init = function (num) {
          for (var i = 0; i < num; i++) {
            circles.push(new Circle(Math.random() * w, Math.random() * h));
          }
          draw();
        };
  
        window.addEventListener("load", init(60));
  
        window.onmousemove = function (e) {
          e = e || window.event;
          current_circle.x = e.clientX;
          current_circle.y = e.clientY;
        };
  
        window.onmouseout = function () {
          current_circle.x = null;
          current_circle.y = null;
        };
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .contetnbox {
    width: 100%;
    height: 100vh;
    padding: 0.7rem 1.2rem 1.5rem 1.2rem;
    //   background-clip: content-box;
    //   background-color: rgb(29, 52, 99);
    color: aqua;
    display: grid;
    grid-template-rows: 35% 33% 32%;
    .head {
      // background-color: #f4cdcd;
      display: grid;
      width: 100%;
      grid-template-columns: 16.66% 66.66% 16.66%;
      .publicdata {
        //   background-color: rgb(197, 247, 226);
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-rows: 45% 55%;
        text-align: center;
        .publicshow {
          // background-color: rgb(248, 218, 218);
          background-repeat: no-repeat;
          background-image: url("@/assets/one/main_top_left.png");
          background-position: 0 2px;
          background-size: 100% 98%;
          .maincontents {
            // background-color: #fff;
            height: 80%;
            padding: 0 3%;
            background-clip: content-box;
            display: grid;
            height: 100%;
            width: 100%;
            grid-template-rows: 35% 35%;
            //   height: 95%;
            font-size: 12px;
            .box {
              display: flex;
              height: 95%;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .part1 {
              // background-color: rgb(192, 142, 142);
              display: grid;
              height: 100%;
              width: 100%;
              grid-template-columns: repeat(3, 33.33%);
              .box:nth-child(1) {
                padding-bottom: 2.5%;
                background-clip: content-box;
                background-color: rgb(182, 182, 238);
              }
              .box:nth-child(2) {
                padding: 0 5%;
                padding-bottom: 2.5%;
                background-clip: content-box;
                background-color: rgb(240, 210, 210);
              }
              .box:nth-child(3) {
                background-color: rgb(170, 234, 203);
                padding-bottom: 2.5%;
                background-clip: content-box;
              }
            }
            .part2 {
              // background-color: rgb(222, 85, 85);
              display: grid;
              height: 100%;
              width: 100%;
              grid-template-columns: repeat(4, 25%);
              .box:nth-child(1) {
                margin-top: 2.5%;
                background-color: rgb(182, 238, 186);
              }
              .box:nth-child(2) {
                margin: 0 5%;
                margin-top: 2.5%;
                background-color: rgb(228, 210, 240);
              }
              .box:nth-child(3) {
                margin-right: 5%;
                background-color: rgb(170, 175, 234);
                margin-top: 2.5%;
              }
              .box:nth-child(4) {
                background-color: rgb(195, 234, 170);
                margin-top: 2.5%;
              }
            }
          }
        }
        .datashow {
          background-repeat: no-repeat;
          background-image: url("@/assets/one/main_top_left.png");
          background-position: 0 2px;
          background-size: 100% 98%;
          padding-top: 0.4rem;
          background-clip: content-box;
          .addinfo {
            height: 75%;
            width: 95%;
            margin: 0 auto;
            // background-color: #fff;
          }
        }
      }
      .maindata {
        //   background-color: rgb(205, 173, 244);
        padding: 0 1.2rem;
        background-clip: content-box;
        display: grid;
        width: 100%;
        grid-template-rows: 45% 55%;
        .title {
          // background-color: rgb(243, 196, 196);
          .themetitle {
            //   background-color: #fff;
            height: 40%;
            width: 100%;
            display: grid;
            grid-template-columns: 15% 70% 15%;
            .mainbgc {
              background-size: 100% 90%;
              text-align: center;
              font-size: 21px;
              background-repeat: no-repeat;
              color: rgb(38, 251, 255);
              font-weight: 700;
              background-image: url("@/assets/one/title_bg.png");
            }
            .desa {
              // background-color: rgb(213, 89, 89);
              background-image: url("@/assets/one/main_middle.png");
              background-size: 100%;
              // text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              background-size: 100% 144%;
              background-clip: content-box;
              background-repeat: no-repeat;
              padding-right: 20% !important;
            }
            .desc {
              // background-color: rgb(213, 89, 89);
              background-image: url("@/assets/one/main_middle.png");
              background-size: 100%;
              background-clip: content-box;
              background-size: 100% 144%;
              // text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              background-repeat: no-repeat;
              padding-left: 20%;
            }
          }
          .showqty {
            display: grid;
            grid-template-columns: 30% 40% 30%;
            text-align: center;
            height: 60%;
            .qtybox {
              // background-color: rgb(227, 252, 208);
              display: flex;
              // padding-top
              // height: 80%;
              justify-content: space-between;
              .box {
                width: 19.5%;
              }
              .box1,
              .box2,
              .box3,
              .box4,
              .box5 {
                //   background-color: rgb(248, 190, 190);
                //   padding-top:20%;
                //   background-clip: padding-box;
                height: 100%;
                background-image: url("@/assets/one/center_num.png");
                background-size: 80% 80%;
                background-position: 50% 50%;
                font-weight: 1000;
                font-size: 24px;
                background-repeat: no-repeat;
                display: flex;
                justify-content: center;
                align-items: center;
                color: aqua;
                //   margin-right: 1%;
              }
            }
            .desc {
              line-height: 100%;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              // background-color: rgb(246, 110, 110);
              font-size: 18px;
              color: aqua;
            }
          }
        }
        .titledata {
          // background-color: rgb(237, 222, 192);
          display: grid;
          grid-template-columns: 50% 50%;
          .firstdata {
            //   background: rgb(235, 175, 175);
            background-repeat: no-repeat;
            background-image: url("@/assets/one/main_top_bottom.png");
            background-size: 101% 96%;
            background-position: 0 0;
            font-size: 14px;
            margin-right: 0.6rem;
            .title {
              margin-left: 5%;
            }
            .piemap {
              // background-color: rgb(213, 252, 221);
              height: 85%;
            }
          }
          .seconddata {
            //   background-color: rgb(217, 230, 155);
            margin-left: 0.6rem;
            background-image: url("@/assets/one/main_top_bottom.png");
            background-repeat: no-repeat;
            background-size: 101% 96%;
            background-position: 0 0;
            font-size: 14px;
            .title {
              margin-left: 5%;
            }
            .piemap {
              // background-color: rgb(252, 214, 214);
              height: 85%;
            }
          }
        }
      }
      .otherdata {
        //   background-color: rgb(229, 241, 185);
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-rows: 45% 55%;
        text-align: center;
        .publicshow {
          // background-color: rgb(248, 218, 218);
          background-repeat: no-repeat;
          background-image: url("@/assets/one/main_top_left.png");
          background-position: 0 2px;
          background-size: 100% 98%;
          .maincontents {
            // background-color: #fff;
            height: 80%;
            padding: 0 3%;
            background-clip: content-box;
            display: grid;
            height: 100%;
            width: 100%;
            grid-template-rows: 35% 35%;
            //   height: 95%;
            font-size: 12px;
            .box {
              display: flex;
              height: 95%;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .part1 {
              // background-color: rgb(192, 142, 142);
              display: grid;
              height: 100%;
              width: 100%;
              grid-template-columns: repeat(3, 33.33%);
              .box:nth-child(1) {
                padding-bottom: 2.5%;
                background-clip: content-box;
                background-color: rgb(182, 182, 238);
              }
              .box:nth-child(2) {
                padding: 0 5%;
                padding-bottom: 2.5%;
                background-clip: content-box;
                background-color: rgb(240, 210, 210);
              }
              .box:nth-child(3) {
                background-color: rgb(170, 234, 203);
                padding-bottom: 2.5%;
                background-clip: content-box;
              }
            }
            .part2 {
              // background-color: rgb(222, 85, 85);
              display: grid;
              height: 100%;
              width: 100%;
              grid-template-columns: repeat(4, 25%);
              .box:nth-child(1) {
                margin-top: 2.5%;
                background-color: rgb(182, 238, 186);
              }
              .box:nth-child(2) {
                margin: 0 5%;
                margin-top: 2.5%;
                background-color: rgb(228, 210, 240);
              }
              .box:nth-child(3) {
                margin-right: 5%;
                background-color: rgb(170, 175, 234);
                margin-top: 2.5%;
              }
              .box:nth-child(4) {
                background-color: rgb(195, 234, 170);
                margin-top: 2.5%;
              }
            }
          }
        }
        .datashow {
          background-repeat: no-repeat;
          background-image: url("@/assets/one/main_top_left.png");
          background-position: 0 2px;
          background-size: 100% 98%;
          padding-top: 0.4rem;
          background-clip: content-box;
          .addinfo {
            height: 75%;
            width: 95%;
            margin: 0 auto;
            // background-color: #fff;
          }
        }
      }
    }
    .maincontent {
      // background-color: rgb(201, 238, 197);
      display: grid;
      grid-template-rows: 30% 70%;
      .partfive {
        //   background-color: rgb(255, 209, 209);
        display: flex;
        top: 0;
        justify-content: space-between;
        padding-top: 0.5%;
        //   z-index: 1000;
        .qtyshow {
          width: 18%;
          height: 70%;
          // background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          background-image: url("@/assets/one/main_middle.png");
          color: #fff;
          background-size: 100% 100%;
          // padding-top: 2%;
          background-clip: padding-box;
          background-position: 0 0px;
          background-repeat: no-repeat;
          // opacity: .7;
          // box-shadow: 3px 0 3px rgb(157, 209, 228) inset,-3px 0px 3px rgb(157, 209, 228),0 -3px 3px rgb(157, 209, 228),0 3px 3px rgb(157, 209, 228);
        }
      }
      .tablepart {
        //   background-color: rgb(228, 174, 174);
        display: flex;
        justify-content: space-between;
        .scrollpart {
          // background-color: #fff;
          width: calc((100% - 4rem) / 3);
          background-repeat: no-repeat;
          background-size: 100% 96%;
          background-position: 0 0;
          background-image: url("@/assets/one/main_bottopm_top1.png");
          .title {
            margin-left: 9%;
            margin-top: 19px;
            height: 20%;
          }
          .contentscroll {
            //   background-color: rgb(233, 210, 210);
            height: 80%;
            width: 99%;
            position: relative;
            ul {
              color: #fff;
              li {
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-around;
                span {
                  height: 1.2rem;
                }
              }
              // }
            }
          }
        }
      }
    }
    .bottomcontent {
      // background-color: rgb(229, 242, 212);
      display: grid;
      grid-template-columns: 16.66% 66.66% 16.66%;
      .title {
        width: 100%;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
      }
      .part1 {
        //   background-color: rgb(123, 236, 75);
        height: 100%;
        background-image: url("@/assets/one/main_top_left.png");
        background-size: 100% 99%;
        background-repeat: no-repeat;
        .mainCancar {
          height: 80%;
          // background-color: rgb(249, 249, 228);
          padding: 3%;
          background-clip: content-box;
        }
      }
      .part2 {
        //   background-color: rgb(227, 67, 67);
        display: flex;
        justify-content: space-around;
        .barone {
          background-image: url("@/assets/one/light.png");
          height: 80%;
          background-repeat: no-repeat;
          background-size: 100% 20%;
        }
        .leftpart {
          width: 48%;
          background-image: url("@/assets/one/main_top_left.png");
          background-size: 100% 99%;
          background-repeat: no-repeat;
        }
        .rightpart {
          background-image: url("@/assets/one/main_top_left.png");
          background-size: 100% 99%;
          background-repeat: no-repeat;
          width: 48%;
        }
      }
      .part3 {
        background-image: url("@/assets/one/main_top_left.png");
        background-size: 100% 99%;
        background-repeat: no-repeat;
        .barone {
          height: 80%;
        }
      }
    }
  }
  </style>
  