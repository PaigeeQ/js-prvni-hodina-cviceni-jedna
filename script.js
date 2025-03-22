
document.body.innerHTML += "Měsíční příjem = ";
document.body.innerHTML += 320 * 7 * 21;
document.body.innerHTML += "<br>";
document.body.innerHTML += "15 % daň = ";
document.body.innerHTML += Math.floor(((320 * 7 * 21)*0.4) * 0.15);

/* Výplata
Pomocí jednoduché aritmetiky spočítejte, kolik si jako programátor vyděláte.
Založte si novou prázdnou stránku s JavaScriptovým programem.
V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Měsíční příjem vypište do stránky.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
Daň také vypište do stránky.
*/