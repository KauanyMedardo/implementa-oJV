const dataAtual = new Date ();
let dataNiver = prompt ("Data do próximo viver:"); 
dataNiver = new Date ( dataNiver+"T 23:59:59"); 
let diasQueFaltam = Math.foor ((dataNiver-dataAtual)/86400000);  