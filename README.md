<h3>概略</h3>
今回はcreate-react-appでreactとtypescriptを使ってタイピングアプリを作った
<h3>このタイピングアプリで今後導入したいもの</h3>
<li>bgmを入れる
<li>難易度を選択できるようにする
<li>終了ボタンを作り、結果を表示できるようにする
<li>resetするごとに、背景を変える
<li>日本語の文にしてローマ字を入力してもらう仕様にするのもありかも。

<h3>手詰まったところ</h3>
<li>タイマーの数値がずれてしまい直すのに手間取った
<li>typescriptのエラーやcreate-react-appのエラーが多くデバッグするのに時間がかかった
<h3>できるなら直したいところ</h3>
<li>startボタンを押さずともタイピングを始めればタイマーが作動するようにしたい
<li>タイプする文字を英単語にしたい
<br>
<h3>備考</h3>
npx create-react-app (app-name) --typescript<br>
npm install @material-ui/core<br>
npm install --save use-interval --force //強制的にしてるから注意<br>
webpack.config.jsを作る<br>
  
  
  <h3>url</h3>
https://mnt3710.github.io/react-typing-app/
