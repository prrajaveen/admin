let btn = document.getElementById('btn')
showClintDetail()

btn.addEventListener('click', () => {
    var myModalEl = document.getElementById('mymodal')
    console.log(myModalEl)
    myModalEl.addEventListener('hidden.bs.modal', function (event) {

    })
})


let save = document.getElementById('save')
save.addEventListener('click', () => {
    let policyNo = document.getElementById('policyNo')
    let policyHolderName = document.getElementById('policyHolderName')
    let doc = document.getElementById('doc')
    let planTerm = document.getElementById('planTerm')
    let mode = document.getElementById('mode')
    let fup = document.getElementById('fup')
    let installmentPremium = document.getElementById('installmentPremium')
    let sa = document.getElementById('sa')
    let paidDue = document.getElementById('paidDue')
    let mobileNo = document.getElementById('mobileNo')
    let details = {
        'policyNo': policyNo.value,
        'policyHolderName': policyHolderName.value,
        'doc': doc.value,
        'planTerm': planTerm.value,
        'mode': mode.value,
        'fup': fup.value,
        'installmentPremium': installmentPremium.value,
        'sa': sa.value,
        'paidDue': paidDue.value,
        'mobileNo': mobileNo.value
    }

    if (localStorage.getItem('notes') == null) {
        clintDatail = []
    } else {
        clintDatail = JSON.parse(localStorage.getItem('notes'))
    }
    clintDatail.push(details)
    localStorage.setItem('notes', JSON.stringify(clintDatail))

    showClintDetail()
})


function showClintDetail() {
    if (localStorage.getItem('notes') == null) {
        clintDatail = []
    } else {
        clintDatail = JSON.parse(localStorage.getItem('notes'))
    }
    let modal=''
    let html = ''
    sno = 0
    clintDatail.forEach(function (element, index) {
        sno = sno + 1
        html = html + `<tr>
        <td>${sno}</td>
        <td>${element['policyNo']}</td>
        <td>${element['policyHolderName']}</td>
        <td>${element['doc']}</td>
        <td>${element['planTerm']}</td>
        <td>${element['mode']}</td>
        <td>${element['fup']}</td>
        <td>${element['installmentPremium']}</td>
        <td>${element['sa']}</td>
        <td>${element['paidDue']}</td>
        <td>${element['mobileNo']}</td>
        <td ><span id='${index}' class='same' data-bs-target="#my${index}" data-bs-toggle="modal" onclick="modifyDetail(this.id)">Edit</span> | <span id='${index}' class='same' onclick="deleteDetail(this.id)">Delete</span></td>
    </tr>`
    modal=modal+`<div class="modal" tabindex="-1" id="my${index}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-success modal-first-header">
          <h5 class="modal-title ">Dashrath Sahani</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body first-modal">
          <form>
            <div class="mb-3">
              <label for="policyNo" class="form-label">Policy no</label>
              <input type="text" class="form-control" id="policyNo${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="policyHolderName" class="form-label">Policy Holder name</label>
              <input type="text" class="form-control" id="policyHolderName${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="doc" class="form-label">D.O.C</label>
              <input type="text" class="form-control" id="doc${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="planTerm" class="form-label">Plan Term</label>
              <input type="text" class="form-control" id="planTerm${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="mode" class="form-label">Mode</label>
              <input type="text" class="form-control" id="mode${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="fup" class="form-label">FUP</label>
              <input type="text" class="form-control" class='fup' id="fup${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="installmentPremium" class="form-label">Installment Premium</label>
              <input type="text" class="form-control" id="installmentPremium${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="sa" class="form-label">S.A</label>
              <input type="text" class="form-control" id="sa${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="paidDue" class="form-label">Paid/Due</label>
              <input type="text" class="form-control" id="paidDue${index}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="mobileNo" class="form-label">Mobile No</label>
              <input type="text" class="form-control" id="mobileNo${index}" aria-describedby="emailHelp">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="save${index}">Save Changes</button>
        </div>
      </div>
    </div>
  </div>`
    });
    let model=document.getElementById('model')
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = html
    model.innerHTML=modal

}

function deleteDetail(index) {
    console.log('i am deleting', index)
    if (localStorage.getItem('notes') == null) {
        clintDatail = []
    } else {
        clintDatail = JSON.parse(localStorage.getItem('notes'))
    }
    clintDatail.splice(index,1)
    result=confirm('Are you sure to Delete')
    if(result==true){
        localStorage.setItem('notes',JSON.stringify(clintDatail))
    }
    
    showClintDetail()
}


function modifyDetail(index){
    if (localStorage.getItem('notes') == null) {
        clintDatail = []
    } else {
        clintDatail = JSON.parse(localStorage.getItem('notes'))
    }
    let policyNo = document.getElementById('policyNo'+index)
    let policyHolderName = document.getElementById('policyHolderName'+index)
    let doc = document.getElementById('doc'+index)
    let planTerm = document.getElementById('planTerm'+index)
    let mode = document.getElementById('mode'+index)
    let fup = document.getElementById('fup'+index)
    let installmentPremium = document.getElementById('installmentPremium'+index)
    let sa = document.getElementById('sa'+index)
    let paidDue = document.getElementById('paidDue'+index)
    let mobileNo = document.getElementById('mobileNo'+index)
    var myModalEl = document.getElementById('mymodal'+index)
    policyNo.value=clintDatail[index]['policyNo']
    policyHolderName.value=clintDatail[index]['policyHolderName']
    doc.value=clintDatail[index]['doc']
    planTerm.value=clintDatail[index]['planTerm']
    mode.value=clintDatail[index]['mode']
    fup.value=clintDatail[index]['fup']
    installmentPremium.value=clintDatail[index]['installmentPremium']
    sa.value=clintDatail[index]['sa']
    paidDue.value=clintDatail[index]['paidDue']
    mobileNo.value=clintDatail[index]['paidDue']
    let model=document.getElementById('my'+index)
    model.addEventListener('hidden.bs.modal', function (event) {  
    })

    let button=document.getElementById('save'+index)
    button.addEventListener('click',()=>{
        let details = {
            'policyNo': policyNo.value,
            'policyHolderName': policyHolderName.value,
            'doc': doc.value,
            'planTerm': planTerm.value,
            'mode': mode.value,
            'fup': fup.value,
            'installmentPremium': installmentPremium.value,
            'sa': sa.value,
            'paidDue': paidDue.value,
            'mobileNo': mobileNo.value
        }
       clintDatail[index]=details
       localStorage.setItem('notes',JSON.stringify(clintDatail))
       showClintDetail()
       
    })
    
    

}


$(document).ready(function () {
    $('#myTable').DataTable();
});




