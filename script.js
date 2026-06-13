// 1. Alert
document.getElementById('alertLink').onclick = () => alert('Clicked!');

// 2. Mobile Alert
document.querySelector('.phone-img').onclick = () => alert('Mobile clicked!');

// 3. Delete Row
document.querySelectorAll('.del-btn').forEach(btn => {
    btn.onclick = (e) => e.target.parentElement.parentElement.remove();
});

// 4. Mouseover
const img = document.getElementById('hoverImg');
img.onmouseover = () => img.src = 'pic2.jpg';
img.onmouseout = () => img.src = 'pic1.jpg';

// 5. Counter
let count = 0;
const display = document.getElementById('counter');
document.getElementById('incBtn').onclick = () => display.innerText = ++count;
document.getElementById('decBtn').onclick = () => display.innerText = --count;

// Table & Index Update
function deleteRow(btn) {
    btn.closest('tr').remove();
    document.querySelectorAll('#studentTable tbody tr').forEach((row, i) => row.cells[0].innerText = i);
}

// Image Swap
const img = document.getElementById('myImage');
img.onmouseover = () => img.src = 'img2.jpg';
img.onmouseout = () => img.src = 'img1.jpg';

// Counter
let c = 0;
function updateCounter(v) {
    c += v;
    document.getElementById('count').innerText = c;
}