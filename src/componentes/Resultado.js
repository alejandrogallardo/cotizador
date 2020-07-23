import React from 'react';

const Resultado = ({cantidad, total, plazo}) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: Q {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago mensual es de: Q {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: Q {total}</p>
        </div>
    );
}

export default Resultado;