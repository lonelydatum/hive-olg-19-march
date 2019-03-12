import './common.js'


function start(){

	

	const time = .525

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from("#player", .5, {x:300})

	tl.from("#t1a", time, {x:-300}, '-=.15')
	tl.from("#t1b", time, {x:-300}, `-=${time*.3}`)
	tl.from("#t1c", time, {x:-300}, `-=${time*.3}`)
	tl.from("#t1d", time, {x:-300}, `-=${time*.3}`)


	const t1Out = {x:"+=100", skewY:10, skewX:10,  scale:1, opacity:0}
	tl.add("t1Out", "+=2.5")
	tl.to("#t1a", time, {...t1Out}, "t1Out")
	tl.to("#t1b", time*1.1, {...t1Out}, "t1Out")
	tl.to("#t1c", time*1.2, {...t1Out}, "t1Out")
	tl.to("#t1d", time*1.3, {...t1Out}, "t1Out")
	tl.to("#prolineSmall", .3, {opacity:0}, "t1Out")



	// return 
	const scale = {scale:2, opacity:0, ease:Back.easeIn}
	
	tl.set(".frame2", {opacity:1})
	tl.add("t2In")
	tl.from("#t2a", .3, scale, "t2In")
	tl.from("#t2b", .35, scale, "t2In")
	tl.from("#t2c", .45, scale, "t2In")

	const shakeAmount = 7
	tl.add("shake", "-=.05")
	tl.to("#player", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	tl.to("#player", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	tl.to("#player", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	tl.to("#player", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})

	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})

	tl.from("#proline", .35, {opacity:0}, "+=.1")

	tl.from("#footer", .35, {opacity:0}, "+=.3")

	// tl.to(".frame1", .5, {opacity:0}, "t2In")


	// tl.gotoAndPlay("t2In")


}




module.exports = start;

