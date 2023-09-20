<template>
  <validation-observer ref="refFormObserver">
    <div class="card modal w-full" @click="emitCloseModal">
      <div class="modal-content" @click.stop>
        <h3 class="title">Project info</h3>

        <span class="close-btn" @click="emitCloseModal">&times;</span>

        <validation-provider rules="required" vid="name">
          <template #default="{ errors }">
            <label class="d-block input-label mb-25">Name</label>

            <input
              v-model="name"
              type="text"
              name="Name"
              class="d-block w-full"
              placeholder="Project name"
            />

            <small v-if="errors.length" class="text-red">{{ errors[0] }}</small>
          </template>
        </validation-provider>

        <button class="btn mt-1" @click="onClickUpdateProject">Update</button>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  props: {
    selectedId: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    name: '',
  }),

  async created() {
    const { name } = await this.readProject(this.selectedId)

    this.name = name
  },

  methods: {
    ...mapActions('projects', ['readProject', 'updateProject']),

    emitCloseModal() {
      this.$emit('closeModal')
    },

    async onClickUpdateProject() {
      const isValid = await this.$refs.refFormObserver.validate()

      if (!isValid) return

      await this.updateProject({ id: this.selectedId, name: this.name })

      this.$emit('projectUpdated')
    },
  },
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.modal-content {
  width: 350px;
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  font-size: 20px;
  padding: 0 6px;
  color: #5e5873;
}
</style>
