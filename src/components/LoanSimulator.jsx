import { useState } from 'react'
import { Link } from 'react-router-dom'

const calcMonthly = (amount, months, rate = 4.5) => {
  const mrate = rate / 100 / 12
  return amount * mrate * Math.pow(1 + mrate, months) / (Math.pow(1 + mrate, months) - 1)
}

export default function LoanSimulator({ compact }) {
  const [amount, setAmount] = useState(300)
  const [months, setMonths] = useState(6)

  const taeg = 4.5
  const monthly = calcMonthly(amount, months, taeg)
  const totalCost = monthly * months
  const interest = totalCost - amount

  return (
    <div className="simulator-card">
      <h3>Simulez votre prêt</h3>

      <div className="simulator-group">
        <div className="simulator-label">
          <span>Montant souhaité</span>
          <strong>{amount.toLocaleString('fr-FR')} €</strong>
        </div>
        <input
          type="range"
          className="simulator-range"
          min={100}
          max={600}
          step={50}
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
          <span>100 €</span>
          <span>600 €</span>
        </div>
      </div>

      <div className="simulator-group">
        <div className="simulator-label">
          <span>Durée de remboursement</span>
          <strong>{months} mois</strong>
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
          <span>3 mois</span>
          <span>10 mois</span>
        </div>
      </div>

      <div className="simulator-result">
        <div className="simulator-result-item">
          <div className="label">Mensualité</div>
          <div className="value">{monthly.toFixed(2)} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">Coût total</div>
          <div className="value green">{totalCost.toFixed(2)} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">Montant emprunté</div>
          <div className="value" style={{ fontSize: 17 }}>{amount.toLocaleString('fr-FR')} €</div>
        </div>
        <div className="simulator-result-item">
          <div className="label">TAEG fixe</div>
          <div className="value" style={{ fontSize: 17 }}>{taeg} %</div>
        </div>
      </div>

      <Link to="/emprunter" className="btn btn-primary w-100" style={{ justifyContent: 'center' }}>
        Faire ma demande
      </Link>

      <p className="simulator-note">Exemple représentatif : prêt de {amount} € sur {months} mois, TAEG fixe de {taeg}%, mensualité de {monthly.toFixed(2)} €, montant total dû de {totalCost.toFixed(2)} €. Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement.</p>
    </div>
  )
}
