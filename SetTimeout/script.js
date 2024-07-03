const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class = 'color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th> 
                    <th>Code</th>
                </tr>
                 <tr>
                    <th>${e.key === ' ' ? 'Space' : e.key}</th>
                    <th>${e.keyCode}</th> 
                    <th> <td>${e.code}</td></th>
                </tr>
            </table>
        </div>
    `
})