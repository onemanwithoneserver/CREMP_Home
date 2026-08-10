export default function BuildingBox({ isMobile }: { isMobile: boolean }) {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#17274C] text-[#0a1128] dark:text-white items-center justify-center">
            <h1 className="text-3xl font-bold">Building Box</h1>
            <p className="mt-4">Welcome to the Building Box page. (isMobile: {isMobile ? 'true' : 'false'})</p>
        </div>
    );
}
