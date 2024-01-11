export const useSensorsData = () => {
  const selectedDate = ref(new Date());

  const labelDate = useDateFormat(selectedDate, 'dddd DD MMMM YYYY');
  const queryDate = useDateFormat(selectedDate, 'YYYY-MM-DD');

  const { isPending, data, isLoading } = useQuery({
    queryKey: [queryDate, 'sensors'],
    queryFn: () => $fetch(`/api/sensors/${queryDate.value}`),
    refetchInterval: 1000 * 60, // 1 Minuto
  });

  return {
    data,
    isLoading,
    isPending,
    labelDate,
    selectedDate,
  };
};
