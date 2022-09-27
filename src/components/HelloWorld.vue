<template>
  <div class="page">{{selectColumn}}
    <div class="filter-wrap">
      <div class="filter-block">
        <div>
          <span>Выбор колонки</span>
          <select
              v-model="selectColumn"
              class="select">
            <option value="" disabled selected>Выбор колонки</option>
            <option value=title>Название</option>
            <option value=quantity>Количество</option>
            <option value=distance>Расстояние</option>
          </select>
        </div>

        <div>
          <span>Выбор условия</span>
          <select class="select">
            <option value="" disabled selected>Выбор условия</option>
            <option value=equal>Равно</option>
            <option value=contain>Содержит</option>
            <option value=more>Больше</option>
            <option value=less>Меньше</option>
          </select>
        </div>

        <div>
          <span>Значение для фильтрации</span>
          <input
              class="select"
              type="text"
          />
        </div>
      </div>
    </div>


    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Дата</th>
        <th scope="col">Название
          <button
              type="button"
              class="btn btn-secondary"
              @click="sortField('title')">
            Сортировать
          </button>
        </th>
        <th scope="col">Количество
          <button
              type="button"
              class="btn btn-secondary"
              @click="sortField('quantity')">
            Сортировать
          </button>
        </th>
        <th scope="col">Расстояние
          <button
              type="button"
              class="btn btn-secondary"
              @click="sortField('distance')">
            Сортировать
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in paginatedItems" :key="item.id"
      >
        <th scope="row">{{ item.date_item }}</th>
        <th>{{ item.title }}</th>
        <th>{{ item.quantity }}</th>
        <th>{{ item.distance }}</th>
      </tr>
      </tbody>
    </table>
    <div>
      Элементов на странице:
    </div>
    <input type="number" v-model="countItems"/>
    <div v-if="paginationLength > 1" class="pag">
      <div
          class="pag-item"
          v-for="(item, index) in paginationLength" :key="item"
          @click="setPage(index+1)"
          :class="{selected: index+1 === page}"
      >
        {{index+1}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    setPage(pageNumber){
      this.page = pageNumber
    },
    sortField(field) {
      this.currentSortField = field
      this.items.sort((a, b) => {
        if (typeof a[field] === 'string') {
          return ('' + a[field]).localeCompare(b[field]);
        }
        return parseFloat(a[field]) - parseFloat(b[field]);
      });
      if (this.currentSortField === field && this.sortOrderMax) {
        this.items.reverse()
        this.sortOrderMax = false
      } else {
        this.sortOrderMax = true
      }
    }
  },
  watch: {
    countItems() {
      console.log("3333333")
      this.page = 1
    }
  },
  computed: {
    paginationLength() {
      if (this.countItems === '') {
        return 1
      }
      return Math.ceil(this.items.length / this.countItems)
    },
    paginatedItems() {
      return this.items.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.page - 1) * this.countItems;
    },
    endIndex() {
      return this.page * this.countItems;
    },
  },
  data() {
    return {
      selectColumn: null,
      page: 1,
      countItems: 6,
      sortOrderMax: true,
      currentSortField: null,
      items: [
        {
          "id": 1,
          "title": "title1",
          "date_item": "1999-12-31",
          "quantity": 200,
          "distance": 12
        },
        {
          "id": 2,
          "title": "title2",
          "date_item": "2000-12-31",
          "quantity": 220,
          "distance": 11
        },
        {
          "id": 3,
          "title": "title3",
          "date_item": "2001-12-31",
          "quantity": 120,
          "distance": 1
        },
        {
          "id": 4,
          "title": "title4",
          "date_item": "2002-12-31",
          "quantity": 43,
          "distance": 6
        },
        {
          "id": 5,
          "title": "title5",
          "date_item": "2003-12-31",
          "quantity": 53,
          "distance": 234
        },
        {
          "id": 6,
          "title": "title6",
          "date_item": "2004-12-31",
          "quantity": 65,
          "distance": 262
        },
        {
          "id": 7,
          "title": "title7",
          "date_item": "2005-12-31",
          "quantity": 822,
          "distance": 742
        },
        {
          "id": 8,
          "title": "title8",
          "date_item": "2006-12-31",
          "quantity": 6,
          "distance": 2
        },
        {
          "id": 9,
          "title": "title9",
          "date_item": "2007-12-31",
          "quantity": 56,
          "distance": 12
        },
        {
          "id": 10,
          "title": "title10",
          "date_item": "2008-12-31",
          "quantity": 886,
          "distance": 896
        },
        {
          "id": 11,
          "title": "title11",
          "date_item": "2009-12-31",
          "quantity": 836,
          "distance": 96
        },
        {
          "id": 12,
          "title": "title12",
          "date_item": "2010-12-31",
          "quantity": 90,
          "distance": 21
        }
      ]
    }
  }
}
</script>

<style scoped>

.pag-item {
  width: 30px;
  height: 30px;
  background-color: #5b5b5b;
  color: azure;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  line-height: 30px;
  vertical-align: middle;
}
.filter-wrap{
  width: 100%;
  background-color: #dadada;
  padding: 20px 0;
}
.pag {
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.selected{
  transition: .3s;
  transform: scale(1.6);
}
.page{
  height: 2000px;
}
.filter-block{
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.select{
  width: 150px;
  margin-left: 10px;
}
</style>
