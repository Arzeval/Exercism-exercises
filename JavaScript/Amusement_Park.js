

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
 function createVisitor(name, age, ticketId) {
    const Visitor = {
      name, age, ticketId
    }
    return Visitor
  }
  /**
   * Revokes a ticket for a visitor.
   *
   * @param  visitor the visitor with an active ticket
   * @returns the visitor without a ticket
   */
   function revokeTicket(visitor) {
    visitor.ticketId = null
    return visitor
  }
  /**
   * Determines the status a ticket has in the ticket tracking object.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
   function ticketStatus(tickets, ticketId) {
      
      for (let ticket in tickets) {
          
          if (ticket=== ticketId){
              if (tickets[ticket] === null) {
                  return 'not sold'
              } else {
                  return `sold to ${tickets[ticket]}`
              }
             
              
          } 
          
      }
          return 'unknown ticket id'
    }
  /**
   * Determines the status a ticket has in the ticket tracking object
   * and returns a simplified status message.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
   function simpleTicketStatus(tickets, ticketId) {
      for (let ticket in tickets) {
            
            if (ticket=== ticketId){
                if (tickets[ticket] != undefined) {
                    return `${tickets[ticket]}`
                }
    
            }  
        }
            return 'invalid ticket !!!'
      }
  /**
   * Determines the version of the GTC that was signed by the visitor.
   *
   * @param visitor
   * @returns {string | undefined} version
   */
   function gtcVersion(visitor) {
    return visitor?.gtc?.version
  }