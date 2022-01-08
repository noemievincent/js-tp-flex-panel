(function (){
    const oPanel ={
        init(){
            document.documentElement.classList.add('js-enabled');
            this.aPanels = document.querySelectorAll('.panel');
            for (const ePanel of this.aPanels) {
                ePanel.addEventListener('click',(event)=>{
                    event.currentTarget.classList.toggle('open');
                });
                ePanel.addEventListener('transitionend',(even)=>{
                    if (even.propertyName.includes('flex')){
                        even.currentTarget.classList.toggle('open-active');
                    }
                });
            }
        }
    }
    oPanel.init();
})();