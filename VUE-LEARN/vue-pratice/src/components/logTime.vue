<template>
  <div class="block">
    <span class="demonstration">日期</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="年/月/日">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">时间</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Hours"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>

<style>

</style>
