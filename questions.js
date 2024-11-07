

export const myQuestions = [
    {
      question: "What’s the main difference between Accrual and Cash Basis accounting?",
      answers: ["Accrual records transactions when cash is received or paid; Cash Basis records them when earned or incurred", 
        "Accrual records revenue when earned and expenses when incurred; Cash Basis records revenue and expenses when cash is exchanged", 
        "Both Accrual and Cash Basis account for transactions at year-end", 
        "Accrual only applies to income; Cash Basis only applies to expenses"],
      correctAnswer: "Accrual records revenue when earned and expenses when incurred; Cash Basis records revenue and expenses when cash is exchanged",
      semiCorrectAnswer: "Both Accrual and Cash Basis account for transactions at year-end",
      category: "Accounting",
      explanation: "Accrual accounting records transactions when earned or incurred, not when cash is exchanged. Cash Basis accounting only records transactions when cash is received or paid"
    },
    {
      question: "What’s the key difference between Periodic and Perpetual inventory valuation?",
      answers: ["Periodic updates inventory in real-time; Perpetual updates at the end of the period", 
        "Periodic updates inventory at intervals and calculates COGS at period-end; Perpetual updates with each transaction", 
        "Periodic uses real-time data for COGS; Perpetual requires physical counts", 
        "Periodic and Perpetual both update inventory in real-time"],
      correctAnswer: "Periodic updates inventory at intervals and calculates COGS at period-end; Perpetual updates with each transaction",
      semiCorrectAnswer: "Periodic updates inventory in real-time; Perpetual updates at the end of the period",
      category: "Accounting",
      explanation: "In Periodic, inventory updates occur at set intervals and COGS is calculated at the end of the period. In Perpetual, inventory is updated continuously with each transaction."
  
    },
    {
      question: "What is the purpose of withholding tax in business transactions?",
      answers: ["It is a tax levied on the company's profits before paying taxes", 
        "It is a tax withheld by the buyer from the seller’s payment and remitted directly to the tax authorities", 
        "It is a tax on salaries paid to employees, withheld by the employer and paid directly to the employee", 
        "It is a tax on goods sold, collected at the point of sale."],
      correctAnswer: "It is a tax withheld by the buyer from the seller’s payment and remitted directly to the tax authorities",
      semiCorrectAnswer: "It is a tax on salaries paid to employees, withheld by the employer and paid directly to the employee",
      category: "Accounting",
      explanation: "Withholding tax is a tax deducted at the source by the payer (e.g., a buyer) from the payment to the payee (e.g., a seller or contractor), and it is then remitted to the tax authorities. It is commonly used for income or service payments"
    },
    {
      question: "What is the main difference between Make to Order (MTO) and Reordering Rules in inventory management?",
      answers: ["MTO creates a purchase or manufacturing order based on customer orders; Reordering Rules automatically generate orders based on stock levels", 
        "MTO generates orders based on predicted future sales; Reordering Rules are used for managing sales orders only", 
        "MTO only applies to raw materials, while Reordering Rules apply to finished goods", 
        "MTO and Reordering Rules both automatically generate stock levels based on historical sales data"],
      correctAnswer: "MTO creates a purchase or manufacturing order based on customer orders; Reordering Rules automatically generate orders based on stock levels",
      semiCorrectAnswer: "MTO generates orders based on predicted future sales; Reordering Rules are used for managing sales orders only",
      category: "Inventory",
      explanation: "MTO (Make to Order) generates purchase or manufacturing orders based on customer orders, while Reordering Rules create orders when stock reaches a defined threshold, regardless of customer orders"
    },
    {
      question: "What is the primary difference between Standard Price, FIFO, and Average Cost inventory valuation methods?",
      answers: ["Standard Price uses a fixed cost for inventory, while FIFO and Average Cost track inventory based on purchase order sequence or average price", 
        "FIFO assigns the most recent purchase price to COGS, while Standard Price and Average Cost both use historical prices", 
        "Standard Price uses the average cost of all items in inventory, while FIFO uses the first purchase price and Average Cost uses the last purchase price", 
        "FIFO assigns the first purchase price to COGS, Average Cost uses the average of the most recent prices, and Standard Price uses a fixed cost for all items"],
      correctAnswer: "Standard Price uses a fixed cost for inventory, while FIFO and Average Cost track inventory based on purchase order sequence or average price",
      semiCorrectAnswer: "FIFO assigns the first purchase price to COGS, Average Cost uses the average of the most recent prices, and Standard Price uses a fixed cost for all items",
      category: "Inventory",
      explanation: "Standard Price assigns a fixed, predetermined cost to each unit of inventory. FIFO (First-In, First-Out) assigns the oldest purchase price to COGS first, while Average Cost calculates a weighted average cost for all inventory items"
  
    },
    {
      question: "What is the difference between Customer/Sales Lead Time, Purchase Lead Time, and Purchase Security Lead Time in inventory management?",
      answers: ["Customer/Sales Lead Time is the time from order to delivery, Purchase Lead Time is the time to receive materials, and Purchase Security Lead Time is an additional buffer to avoid stockouts", 
        "Customer/Sales Lead Time is the time required to process a purchase order, Purchase Lead Time is the time from order to delivery, and Purchase Security Lead Time is the time to manufacture products", 
        "Customer/Sales Lead Time is the time it takes to restock inventory, Purchase Lead Time is the time between order placement and receiving, and Purchase Security Lead Time is the time for customs clearance", 
        "Customer/Sales Lead Time is used only for manufacturing, Purchase Lead Time and Purchase Security Lead Time are interchangeable terms"],
      correctAnswer: "Customer/Sales Lead Time is the time from order to delivery, Purchase Lead Time is the time to receive materials, and Purchase Security Lead Time is an additional buffer to avoid stockouts",
      semiCorrectAnswer: "Customer/Sales Lead Time is the time it takes to restock inventory, Purchase Lead Time is the time between order placement and receiving, and Purchase Security Lead Time is the time for customs clearance",
      category: "Inventory",
      explanation: "Customer/Sales Lead Time refers to the time from when a customer places an order to when they receive the product. Purchase Lead Time is the time taken for the business to receive materials or goods after placing a purchase order. Purchase Security Lead Time is an additional buffer time added to ensure inventory levels are maintained and to prevent stockouts"
    }
  ];