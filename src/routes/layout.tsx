import { component$, createContextId, Slot, useContextProvider, useStore, } from "@builder.io/qwik";

export const MyContext = createContextId('aqik-affirmations')

export default component$(() => {
  const state = useStore({
    affirmations: [],
    openModal: False
  })

  useContextProvider(MyContext, state)
  

  return (
    <>
    {state.openModal && <Modal />}
    <header>
      icon
    </header>
      <main class="flex-1 flex flex-col max-w-[1200px] mx-auto w-full">
      <Slot />
      </main>
    <footer></footer>
    </>
  );
});
