<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col- text-start">
                <form action="">

                    <div class=" mb-3 mt-3">
                        <label for="usr-register" class="form-label ">UserName</label>
                          <input type="text" class="form-control w-50" id="usr-register" name="usr-register">
                    </div>

                    <div class=" mb-3 mt-3">
                        <label for="email-register" class="form-label ">Email</label>
                          <input type="email" class="form-control w-50" id="email-register" name="email-register">
                    </div>
                    
                    <div class=" mb-3 mt-3">
                        <label for="fname-register" class="form-label ">fname</label>
                          <input type="text" class="form-control w-50" id="fname-register" name="fname-register">
                    </div>
                    
                    <div class=" mb-3 mt-3">
                        <label for="lname-register" class="form-label ">lname</label>
                          <input type="text" class="form-control w-50" id="lname-register" name="lname-register">
                    </div>

                    <div class=" mb-3 mt-3">
                        <label for="password-register" class="form-label ">password</label>
                          <input type="password" class="form-control w-50" id="password-register" name="password-register">
                    </div>

                    <div class=" mb-3 mt-3">
                        <label for="pswagain-register" class="form-label ">pswagain</label>
                          <input type="pswagain" class="form-control w-50" id="pswagain-register" name="pswagain-register">
                    </div>

                    <div class="form-check">

                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked>Free Plan - free -  unlimited
                            <label class="form-check-label" for="radio1"></label>
                            </div>

                            <div class="form-check">
                            <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">1-Year Pro Subscription - $99.00 -  1 Year
                            <label class="form-check-label" for="radio2"></label>
                            </div>

                            <div class="form-check">
                            <input type="radio" class="form-check-input" disabled>3-Month Pro Subscription - $49.00 -  3 Months
                            <label class="form-check-label"></label>
                  </div>

                </form>
                <h4 class="mt-3 text-danger">Discount code</h4>
                <input type="text" id="txt-discount" name="txt-deiscount"  class="form-control mt-3 mb-3 p-2 w-50"/>
                <button class="btn btn-info m-3 border">Apply</button>
            <div class="table-responsive-sm m-5">
                <table class="table  table-info table-striped table-hover">
                    <thead>
                        <tr>
                            <th>MemberShip</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableItems" :key="item.id">
                            <td>{{item.tblName1}}</td>
                            <td>{{item.tblName2}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

                <h4>Choose your payment method</h4>
                <div>
                    <div class="form-ch">
                       <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2">1-Year Pro Subscription - $99.00 -  1 Year
                        <input type="radio" name="radio-payment" class="form-check-input" value="Paypal">
                    </div>
                </div>

            </div>

            <div class="col-"></div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'RegisterBody',
        data(){
            return{
                tableItems:[
                    {id:1,tblName1:'1-Year Pro Subscription',tblName2:'$99.00'},
                    {id:2,tblName1:'Total Today',tblName2:'$99.00'},
                    {id:3,tblName1:'Total Recurring Per Year',tblName2:'$99.00/Year'},
                    {id:4,tblName1:'Next Renewal Duer',tblName2:'May 2, 2023'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>