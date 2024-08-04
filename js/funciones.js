// Crear un formateador de números para el formato de moneda
const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function calcularResultados() {
    // Obtener valores del formulario
    const sueldoBasico = parseFloat(document.getElementById('sueldo_basico').value) || 0;
    const antiguedad = parseFloat(document.getElementById('antiguedad').value) || 0;
    const horasAsamblea = parseFloat(document.getElementById('horas_asamblea').value) || 0;
    const horas100 = parseFloat(document.getElementById('horas_100').value) || 0;
    const horas50 = parseFloat(document.getElementById('horas_50').value) || 0;

    // Definir las tasas
    const tasaAsamblea = 100; // Ajusta según corresponda
    const tasaHoras100 = sueldoBasico / 160; // Ejemplo, ajustar según corresponda
    const tasaHoras50 = tasaHoras100 * 0.5;

    // Calcular los valores
    const valorAsamblea = horasAsamblea * tasaAsamblea;
    const valorHoras100 = horas100 * tasaHoras100;
    const valorHoras50 = horas50 * tasaHoras50;
    const antiguedadCalculada = sueldoBasico * (antiguedad / 100);
    const total = sueldoBasico + antiguedadCalculada + valorAsamblea + valorHoras100 + valorHoras50;

    // Mostrar los resultados en la sección de resultados
    document.getElementById('resultado_sueldo').textContent = `Sueldo Básico: ${currencyFormatter.format(sueldoBasico)}`;
    document.getElementById('resultado_antiguedad').textContent = `Antigüedad: ${currencyFormatter.format(antiguedadCalculada)}`;
    document.getElementById('resultado_asamblea').textContent = `Horas de Asamblea: ${currencyFormatter.format(valorAsamblea)}`;
    document.getElementById('resultado_horas_100').textContent = `Horas Extras al 100%: ${currencyFormatter.format(valorHoras100)}`;
    document.getElementById('resultado_horas_50').textContent = `Horas Extras al 50%: ${currencyFormatter.format(valorHoras50)}`;
    document.getElementById('resultado_total').textContent = `Total: ${currencyFormatter.format(total)}`;

    // Evitar el envío del formulario para demostración
    return false;
}