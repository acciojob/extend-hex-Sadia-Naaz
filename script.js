const extendHex = (shortHex) => {
  // write your code here
	const HexWithoutHash = shortHex.replace(/^#/,'');
	const red = HexWithoutHash[0];
	const green = HexWithoutHash[1];
	const blue = HexWithoutHash[2];
	const fullHex = `${red}${red}${green}${green}${blue}${blue}`;
	return `${fullHex}`
		
	;
	
};
    

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
