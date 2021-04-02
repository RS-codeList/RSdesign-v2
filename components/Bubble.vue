<template>
  <!-- カンバスの置き場所を用意 -->
  <div id="p5Canvas"></div>
</template>

<script lang="ts">
import Vue from "vue";
import p5 from "p5"; //ライブラリをインポート

/** バブルの情報を定義する型 */
interface Bubble {
  /** 位置（画面サイズに対する0〜1の相対位置） */
  pos: {
    x: number;
    y: number;
  };
  /** サイズ(px) */
  size: number;
  /** 上昇スピード（画面高さに対する0〜1の相対値） */
  speed: number;
  /** 塗りつぶすか？ */
  isFill: boolean;
  /** クリックされたか？ */
  clicked: boolean;
  /** 円の中央座標と直径 */
  center: {
    x: number;
    y: number;
    z: number;
  };
}

export default Vue.extend({
  data() {
    return {
      COUNT: 40 as number, //バブルの数
      MINSIZE: 0.005 as number, //バブルの最小サイズ（画面幅を1）
      MAXSIZE: 0.2 as number, //バブルの最大サイズ（画面幅を1）
      MINSPEED: 0.00125 as number, //バブルの最小速度（画面の高さを1として、1フレームごとに動く量の最小値）
      MAXSPEED: 0.005 as number, //バブルの最大速度（画面の高さを1として、1フレームごとに動く量の最大値）
      BG_COLOR: "#171d21" as string, //背景色
      BUBBLE_COLOR: "#77acb5" as string, //バブルの色
      zDist: 0 as number,
      x: 0 as number, //初期位置のx座標
      y: 1.2 as number, //初期位置のy座標
      noise: 0 as number,
      xShift: 0 as number,
      bubbles: [] as Bubble[], //バブルを格納する配列
      canvas: {} as p5.Renderer,
      main: {} as HTMLElement,
    };
  },
  methods: {
    sketch(p: p5): void {
      //インスタンスモードを使用
      p.setup = (): void => {
        //初期化
        //カンバスの作成
        this.canvas = p.createCanvas(
          p.windowWidth,
          p.displayHeight
        ) as p5.Renderer;
        this.canvas.parent("p5Canvas");
        this.main = document.querySelector("main") as HTMLElement;
        this.main.remove(); //余計に生成されるmainタグを削除
      };
      p.draw = (): void => {
        //描画
        p.push(); //描画の開始
        p.background(p.color(this.BG_COLOR));
        p.blendMode(p.SCREEN);
        this.removeOutBubbles(p); //バブルを消去するメソッド
        this.clickBubbles(p);
        while (this.bubbles.length < this.COUNT) {
          //バブルが上限に達していないか判定
          this.addBubble(p); //バブルを追加するメソッド
        }
        this.updateBubbles(); //バブルを上昇させるメソッド
        this.drawBubbles(p); //バブルを描画するメソッド
        p.pop(); //描画の終了
      };
      p.windowResized = (): void => {
        //ウインドウサイズに合わせてカンバスサイズを変更
        p.resizeCanvas(p.windowWidth, p.displayHeight);
      };
    },
    addBubble(p: p5): void {
      //バブルの設定を追加
      // 仮想的な奥行きを決める（0=奥 ... 1=手前）
      // 累乗することで奥の方が多めになるよう偏りをつける
      this.zDist = p.random() ** 3;
      this.x = p.random();
      this.bubbles.push({
        pos: { x: this.x, y: this.y },
        size: p.map(this.zDist, 0, 1, this.MINSIZE, this.MAXSIZE), //奥行の数値を基準に、バブルのサイズを再計算する
        speed: p.map(this.zDist, 0, 1, this.MINSPEED, this.MAXSPEED), //奥行の数値を基準に、バブルのスピードを再計算する
        isFill: Math.random() > 0.5,
        clicked: false,
        center: { x: 0, y: 0, z: 0 }, //円の中央の座標と、直径
      });
    },
    removeOutBubbles(p: p5): void {
      //クリックされたバブルを消去
      this.bubbles = this.bubbles.filter((b) => b.clicked == false);
      //画面外に出たバブルを消去
      this.bubbles = this.bubbles.filter(
        (b) => b.pos.y * p.height + b.center.z >= 0 //円の直径を足して、完全に画面外に出た時に消す
      );
    },
    updateBubbles(): void {
      //バブルを上昇させる
      this.bubbles.forEach((b) => {
        b.pos.y -= b.speed;
      });
    },
    drawBubbles(p: p5): void {
      //設定されたバブルを描画
      this.bubbles.forEach((b) => {
        this.noise = p.noise(b.pos.x * 20, b.pos.y * 20); //左右の振幅を指定
        this.xShift = p.map(this.noise, 0, 1, -15, 15); //振幅の数値を基準に、バブルの横移動を再計算
        const color = p.color(this.BUBBLE_COLOR);
        p.stroke(color);
        b.isFill ? p.fill(color) : p.noFill();
        p.circle(
          (b.center.x = b.pos.x * p.width + this.xShift), //円の描画の中心座標x
          (b.center.y = b.pos.y * p.height), //円の描画の中心座標y
          (b.center.z = b.size * p.width) //円の直径
        );
      });
    },
    clickBubbles(p: p5): void {
      p.mouseClicked = () => {
        let mouseX = p.mouseX;
        let mouseY = p.mouseY;
        this.bubbles.forEach((bubble) => {
          let r = bubble.center.z / 2; //円の半径
          let coordinate = Math.sqrt(
            Math.pow(mouseX - bubble.center.x, 2) +
              Math.pow(mouseY - bubble.center.y, 2)
          );
          if (coordinate <= r) {
            bubble.clicked = true;
          }
        });
      };
    },
  },
  mounted() {
    const p5 = require("p5"); //これが無いとwindow is not definedになる
    new p5(this.sketch); //インスタンスを定義、メッソドを実行
  },
});
</script>

<style lang="scss">
.p5Canvas {
  position: fixed;
  top: 0;
  z-index: -1;
}
</style>