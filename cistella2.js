document.getElementById('afegir').addEventListener('click', function() {
    const desc = document.getElementById('desc').value.trim();
    const preu = parseFloat(document.getElementById('preu').value);
    const quantitat = parseInt(document.getElementById('quantitat').value);

    if (desc && !isNaN(preu) && !isNaN(quantitat) && preu > 0 && quantitat > 0) {
        const tbody = document.querySelector('#taula tbody');
        const tr = document.createElement('tr');

        const tdDesc = document.createElement('td');
        tdDesc.textContent = desc;
        tr.appendChild(tdDesc);

        const tdPreu = document.createElement('td');
        tdPreu.textContent = preu.toFixed(2) + ' €';
        tr.appendChild(tdPreu);

        const tdQuantitat = document.createElement('td');
        tdQuantitat.textContent = quantitat;
        tr.appendChild(tdQuantitat);

        const subtotal = preu * quantitat;
        const tdSubtotal = document.createElement('td');
        tdSubtotal.textContent = subtotal.toFixed(2) + ' €';
        tr.appendChild(tdSubtotal);

        tbody.appendChild(tr);

        updateTotal();

        document.getElementById('formulari').reset();
    } else {
        alert('Per favor, completa tots els camps correctament.');
    }
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('#taula tbody tr').forEach(function(row) {
        const subtotal = parseFloat(row.children[3].textContent);
        total += subtotal;
    });
    document.getElementById('total').textContent = total.toFixed(2) + ' €';
}
