import MainSection from '../../components/MainSection'

const HomeView = () => {
  // const books = useSelector((state: RootState) => state.books.volume)
  // const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="electron-home-view">
      <MainSection>
        <div className="text-[#A6ADBB] flex flex-col p-5 gap-6">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-value">Hello World</div>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  )
}

export default HomeView
