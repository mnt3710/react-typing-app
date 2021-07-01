import React,{useState} from 'react';
import MyButton from './components/MyButton';
import useInterval from "use-interval"
import "./App.css";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const App = () => {
	const [typing, setTyping] = useState(false);
	const [text,setText] = useState("Please click under start button!");
	const [position, setPosition] = useState(0);
	const [typo, setTypo] = useState(new Array(0));

	const [mSecond,setMSecond] = useState(0);
	const [second,setSecond] = useState(0);
	const [minute,setMinute] = useState(0);

	const [timeFlag,setTimeFlag] = useState(true);
	//時間が止まっている間はtrue（最後の文字が入力されてからstartされるまで）
	const [stayFlag,setStayFlag] = useState(false);
	//resetボタンが出ている間true (最後の文字が入力されてからresetされるで)
	const [resetButtonFlag, setResetButtonFlag] = useState(false);
	//start画面
	const [startDispFlag, setStartDispFlag] = useState(false);

	const style = {
		display:"flex",
		justifyContent:"center",
		alignItems: "center",
		height: "43vh",
		width: "50vw",
		border:"1px solid"
	}

	const randomText = () =>{
		//５から１０までのランダムな数字
		for(let k=0; k<1; k++){
		const min = 2
		const max = 8
		let a:number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
		let sample = ""

		for(let j=0 ; j<a; j++){
		let b:number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
		let alp = "abcdefghijklmnopqrstuvwxyz";
		let cl = alp.length;
		let r = "";
		for(let i=0; i<b; i++){
			r = r + alp[Math.floor(Math.random()*cl)];
		}
		sample = sample + r;
		if(j<a-1)sample = sample + " "
		setText(sample)
	}}
	}


	const typingToggle = () => {
		setTyping( typing ? false : true )
		setTimeFlag(false);
		setStayFlag(false)
		setStartDispFlag(true);
	}
	const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) =>{
		if(typing){
			let textSpans = document.querySelector("#textbox")!.children;
			if(e.key === text[position]){
				textSpans[position].classList.add("typed-letters");
				textSpans[position].classList.remove("current-letter");
				if(position <= text.length - 2){
					textSpans[position + 1].className = "current-letter";
					setPosition(position + 1);
				}else{
					setTyping(false)
					setResetButtonFlag(true)
					setStayFlag(true)
				}
			}else{
				if(typo.indexOf(position) === -1 && textSpans[position].className !== "typed-letters"){
					setTypo([...typo,position]);
					textSpans[position].classList.add("typo");
				}
			}
		}
	};

	const refresh = () => {
		let textSpans = document.querySelector("#textbox")!.children;
		for(const i of textSpans){
			i.className = "waiting-letters";
		}
		textSpans[0].className = "current-letters"
		randomText()
		setPosition(0);
		setTypo(new Array(0));
		setResetButtonFlag(false)
		timerReset();
	};

	useInterval(()=>{
		if(mSecond >= 99 || timeFlag)setMSecond(0)
		else if(stayFlag) setMSecond(mSecond)
		else setMSecond(mSecond + 1)
	},10)

	if(mSecond === 98){
		setMSecond(mSecond + 1)
		setSecond(second + 1)
	}
	if(second === 60){
		setSecond(0)
		setMinute(minute + 1)
	}

	const timerReset = () =>{
		setMSecond(0);
		setSecond(0);
		setMinute(0);
	}

	const cpm = ((text.length / (mSecond/100 + second + minute*60))*60).toFixed(2)
	const cpmText = "あなたのCPM(１分間あたりの入力文字数)は"+cpm+"です。"

	return (
		<div className='App' onKeyPress = {(e) => handleKey(e)} tabIndex={0}>

			<Card style={style} variant="outlined">
				<Box>
				<Box>
			<h4>スタートボタンをダブルクリックしてください</h4>
			{startDispFlag && <div><div>
				 ミスタイプ：{typo.length}　正確率：{
					position===0 ? typo.length===1 ? 0.00.toFixed(2) : 100.00.toFixed(2) :
					(100*(1-(typo.length)/(position))).toFixed(2)
					}%
			</div>
			経過時間：{minute<=9 && 0}{minute} : {second<=9 && 0}{second} : {mSecond<=9 && 0}{mSecond}
			<div id="textbox">
				<span className="typed-letters">{text[0]}</span>
				{text
				.split("")
				.slice(1)
				.map(char => (
					<span className="waiting-letters">{char}</span>
				))
				}
			</div>
			</div>
			}
			</Box>
			<Box>
				<div className="buttons">
					{(!typing && position===0) && <MyButton onClick={typingToggle}>start</MyButton>}
					{resetButtonFlag && <MyButton onClick={refresh}>reset</MyButton>}
				</div>
				{(resetButtonFlag&&stayFlag) && cpmText}
				</Box>
				</Box>
				</Card>
		</div>
	);
}
export default App;