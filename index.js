const puppeteer = require('puppeteer');

        async function bot() { 
            const browser = await puppeteer.launch({
                    headless : false
                });
                
            const page = await browser.newPage();
        
            await page.goto('https://orteil.dashnet.org/cookieclicker/');

            await page.click('[id="langSelect-PT-BR"]')   
            
            setInterval(clickinfinito, 300)
        }
    
    async function clickinfinito(){
         await page.click('[id="bigCookie"]')           
    }

bot()

    

  
