<template>
    <div>
        <form action="">
            <div class="row">
                <div class="col">
                    
                    <input type="text" placeholder="Enter UserName" id="txt-username" name="txt-username" class="form-control">
                </div>
                <div class="col">
                    <input type="email" placeholder="Enter UserName" id="txt-username" name="txt-username" class="form-control">
                </div>

                    <div class="d-flex">
                        <textarea name="txt-area" id="txt-area" cols="30" rows="10" class="mt-3 w-100 text-centers justify-content-center"></textarea>
                    </div>
            </div>

            <div class="d-flex justify-content-start">
            <label for="lbl-check" class="form-label">Agree</label>
            <input type="checkbox" class="form-check-input">                
            
            </div>
            <input type="submit" value="Send" class="btn btn-info  m-3">
             
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>