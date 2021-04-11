const HorasTrabalhadas = {
    preview: document.querySelector('.horastrabalhadas'),
    mostrarHorasTrabalhadas(){
        var entrada = document.querySelector('.entrada input').value.split(":")
        var saida = document.querySelector('.saida input').value.split(":")
        
        this.removeOldMessage()

        const result = this.calcularHorasTrabalhadas({horas: entrada[0], minutos: entrada[1]}, {horas: saida[0], minutos: saida[1]})
        this.crateMessage(result)
    
        
    },
    removeOldMessage(){
         const message = document.querySelector('.message')
         if (message) {
            message.remove()
         }      
    },
    crateMessage(results){
        message = document.createElement('p')
        message.classList.add('message')
        message.innerHTML = `Horas trabalhadas: ${results.horas}:${results.minutos}`
        this.preview.appendChild(message)
    },
    calcularHorasTrabalhadas(entrada, saida){
        var total_entrada_minutos = parseInt(entrada.horas * 60) + parseInt(entrada.minutos)
        var total_saida_minutos = parseInt(saida.horas * 60) + parseInt(saida.minutos)
        var tota_minutos_trabalhados
    
        if (total_entrada_minutos <= total_saida_minutos){
            tota_minutos_trabalhados = total_saida_minutos - total_entrada_minutos    
        }
        else{
            tota_minutos_trabalhados = (24*60 - total_entrada_minutos) + total_saida_minutos
        }
      
        var horas_trabalhadas = parseInt(tota_minutos_trabalhados/60).toString()
        var minutos_trabalhados = (tota_minutos_trabalhados % 60).toString()
    
        if (horas_trabalhadas.length == 1) {
            horas_trabalhadas = "0" + horas_trabalhadas 
        }
    
        if (minutos_trabalhados.length == 1) {
            minutos_trabalhados = "0" + minutos_trabalhados
        }
    
        return {horas: horas_trabalhadas, minutos: minutos_trabalhados }    
    }
}
