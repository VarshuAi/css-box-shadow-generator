
            const box = document.getElementById('shadow-box');
            const blur = document.getElementById('sh-blur');
            const code = document.getElementById('sh-code');

            function applyShadow() {
                const sh = `0px 10px ${blur.value}px rgba(255, 20, 147, 0.4)`;
                box.style.boxShadow = sh;
                code.value = `box-shadow: ${sh};`;
            }
            blur.addEventListener('input', applyShadow);
            applyShadow();
        