<template>
    <div v-if="getExample">
        <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed/'+getExample" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {namespace} from 'vuex-class';

    const exampleModelService = namespace('exampleModelService');
    const exampleComService = namespace('exampleComService');

    @Component
    export default class HelloWorld extends Vue {

        @exampleModelService.Getter('getExample')
        private _getExample!: string;

        @exampleComService.Action('loadResponse')
        private _loadResponse!: (question: string) => {};

        @Prop() private msg!: string;
        private _data = 'Hello';

        constructor() {
            super();
            console.log('Constructed ' + this._data);
        }

        public beforeCreate() {
            console.log('BeforeCreated ' + this._data);
        }

        public created() {
            this._loadResponse('meaning_of_life');
            console.log(this._getExample);
            console.log('Created ');
            console.log(this._data);
        }

        public mounted() {
            console.log('Mounted ');
            console.log(this._data);
        }

        public beforeUpdate() {
            console.log('BeforeUpdate ' + this._data);
        }

        public updated() {
            console.log('Updated ' + this._data);
        }

        public helloThere(): string {
            return 'General Kenobi';
        }

        public get getExample(): string {
            return this._getExample;
        }

        @Watch('_data')
        private onDataChange(newValue: string, oldValue: string): void {
            console.log('Do something on attribute _data change');
        }

    }
</script>
