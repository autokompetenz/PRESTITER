import { useState } from 'react'
import { Link } from 'react-router-dom'

const calcMonthly = (amount, months, rate = 4.5) => {
  const mrate = rate / 100 / 12
  return amount * mrate * Math.pow(1 + mrate, months) / (Math.pow(1 + mrate, months) - 1)
}

export default function LoanSimulator({ compact }) {
  const [amount, setAmount] = useState(5000)
  const [months, setMonths] = useState(6)

  const taeg = 4.5
  const monthly = calcMonthly(amount, months, taeg)
  const totalCost = monthly * months
  const interest = totalCost - amount

  return (
    <div className="simulator-card">
      <h3>Simula il tuo prestito</h3>

      <div className="simulator-group">
        <div className="simulator-label">
          <span>Importo desiderato</span>
          <strong>{amount.toLocaleString('fr-FR')} €</strong>
        </div>
        <input
          type="range"
          className="simulator-range"
          min={100}
          max={3000000}
          step={1000}
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <input
          type="number"
          className="form-control"
          min={100}
          max={3000000}
          value={amount}
          onChange={e => {
            const v = Number(e.target.value)
            if (!isNaN(v) && v >= 100 && v <= 3000000) setAmount(v)
          }}
          style={{ marginTop: 8, textAlign: 'center', fontWeight: 700 }}
        />
        <div className="d-flex justify-content-between" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
          <span>100 €</span>
          <span>3 000 000 €</span>
        </div>
      </div>

      <div className="simulator-group">
        <div className="simulator-label">
          <span>Durata del rimborso</span>
          <strong>{months} mesi</strong>
        </div>
        <input
          type="range"
          className="simulator-range"
          min={3}
          max={10}
          step={1}
          value={months}
          onChange={e => setMonths(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
          <span>3 mesi</span>
          <span>10 mesi</span>
        </div>
      </div>

      <div className="simulator-result">
        <div className="simulator-result-item">
          <div className="label">Mensilità</div>
          <div className="value">{monthly.toFixed(2)} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">Costo totale</div>
          <div className="value green">{totalCost.toFixed(2)} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">Importo richiesto</div>
          <div className="value" style={{ fontSize: 17 }}>{amount.toLocaleString('fr-FR')} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">TAEG fisso</div>
          <div className="value" style={{ fontSize: 17 }}>{taeg} %</div>
        </div>
      </div>

      <Link to="/emprunter" className="btn btn-primary w-100" style={{ justifyContent: 'center' }}>
        Fai richiesta
      </Link>

      <p className="simulator-note">Esempio rappresentativo: prestito di {amount} € su {months} mesi, TAEG fisso del {taeg}%, mensilità di {monthly.toFixed(2)} €, importo totale dovuto di {totalCost.toFixed(2)} €. Un credito ti impegna e deve essere rimborsato. Verifica la tua capacità di rimborso.</p>
    </div>
  )
}
