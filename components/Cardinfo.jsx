import React, { useEffect, useState } from 'react'

const Cardinfo = (budgetList, incomeList) => {
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalSpend, setTotalSpend] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [fnancialAdvice, setFinancialAdvice] = useState('')

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      calculateCardInfo()
    }
  }, [budgetList, incomeList])

  // useEffect(() => {
  //   const fetchAdvice = async () => {
  //     if (
  //       budgetList.length > 0 ||
  //       incomeList.length > 0 ||
  //       totalSpend.length > 0
  //     ) {
  //       const advice = await fetchFinancialAdvice(
  //         totalBudget,
  //         totalIncome,
  //         totalSpend
  //       )
  //       setFinancialAdvice(advice)
  //     }
  //   }
  //   fetchAdvice()
  // }, [budgetList, incomeList, totalSpend])

  const CalculateCardInfo = () => {
    console.log(budgetList)
    let totalBudget_ = 0
    let totalSpend_ = 0
    let totalIncome_ = 0

    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount)
      totalSpend_ = totalSpend_ + element.totalSpend
    })

    incomeList.forEach((element) => {
      totalIncome_ = totalIncome_ + element.totalAmount
    })

    setTotalIncome(totalIncome_)
    setTotalBudget(totalBudget_)
    setTotalSpend(totalSpend_)
  }

  return <div>Cardinfo</div>
}

export default Cardinfo
