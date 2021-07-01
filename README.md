<h3>概略</h3>
今回はcreate-react-appでreactとtypescriptを使ってタイピングアプリを作った
<h3>このタイピングアプリで今後導入したいもの</h3>
<li>bgmを入れる
<li>難易度を選択できるようにする
<li>終了ボタンを作り、結果を表示できるようにする
<li>resetするごとに、背景を変える

<h3>手詰まったところ</h3>
<li>タイマーの数値がずれてしまい直すのに手間取った
<li>typescriptのエラーやcreate-react-appのエラーが多くデバッグするのに時間がかかった
<h3>できるなら直したいところ</h3>
<li>startボタンを押さずともタイピングを始めればタイマーが作動するようにしたい
<li>タイプする文字を英単語にしたい
<br>

npx create-react-app (app-name) --typescript
npm install @material-ui/core
npm install --save use-interval --force //強制的にしてるから注意
webpack.config.jsを作る